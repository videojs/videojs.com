const https = require('https');
const fs = require('fs');
const Promise = require('bluebird');

const pluginsUrl = new URL('https://registry.npmjs.org/-/v1/search?text=keywords:videojs&size=250');

function get(url) {
  return new Promise(function(fulfill, reject) {

    https.get(url.href, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
        error.statusCode = statusCode;
        error.retryAfter = Number(res.headers['retry-after']);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        // Consume response data to free up memory
        res.resume();
        reject(error);
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          let parsedData = JSON.parse(rawData);

          fulfill(parsedData);
        } catch (e) {
          return reject(e);
        }
      });
    }).on('error', (e) => {
      return reject(e);
    });
  });
}

// retry rate-limited (429) and server (5xx) errors with exponential backoff,
// honoring the Retry-After header when npm sends one
function getWithRetry(url, attempt = 0) {
  return get(url).catch(function(e) {
    const retryable = e.statusCode === 429 || e.statusCode >= 500;
    if (!retryable || attempt >= 3) {
      throw e;
    }

    const wait = e.retryAfter > 0 ? e.retryAfter * 1000 : 1000 * Math.pow(2, attempt);
    return Promise.delay(wait).then(() => getWithRetry(url, attempt + 1));
  });
}

function getPlugins(from) {
  pluginsUrl.searchParams.set('from', from);
  return getWithRetry(pluginsUrl);
}

// npm's bulk downloads endpoint accepts up to 128 packages per request,
// but doesn't support scoped packages, so those are fetched one at a time
const BULK_SIZE = 128;
const dataPath = __dirname + '/src/data/plugins.json';

// once a request still fails after retries, assume npm is rate limiting this
// build and stop asking, rather than stalling the build on backoff waits
let gaveUp = false;

function getCount(url) {
  if (gaveUp) {
    return Promise.reject(new Error('Skipped after earlier failures'));
  }

  return getWithRetry(url).catch(function(e) {
    gaveUp = true;
    throw e;
  });
}

// last known counts, used for any plugin we couldn't get a fresh count for
function previousCounts() {
  try {
    const counts = {};
    JSON.parse(fs.readFileSync(dataPath, 'utf8')).forEach(function(p) {
      counts[p.name] = p.downloads;
    });
    return counts;
  } catch (e) {
    return {};
  }
}

function getDownloadCounts(packages) {
  const unscoped = packages.filter(p => !p.name.startsWith('@'));
  const scoped = packages.filter(p => p.name.startsWith('@'));

  const batches = [];
  for (let i = 0; i < unscoped.length; i += BULK_SIZE) {
    batches.push(unscoped.slice(i, i + BULK_SIZE));
  }

  const bulk = Promise.map(batches, function(batch) {
    const names = batch.map(p => encodeURIComponent(p.name)).join(',');
    const downloadsUrl = new URL(`https://api.npmjs.org/downloads/point/last-week/${names}`);
    return getCount(downloadsUrl)
    .then(function(downloads) {
      batch.forEach(function(p) {
        // packages npm has no stats for come back as null
        p.downloads = downloads[p.name] ? downloads[p.name].downloads : 0;
      });
    })
    .catch(function(e) {
      console.error(`Failed to fetch counts for ${batch.length} plugins: ${e.message}`);
    });
  }, {concurrency: 1});

  const individual = Promise.map(scoped, function(p) {
    const downloadsUrl = new URL(`https://api.npmjs.org/downloads/point/last-week/${p.name}`);
    return getCount(downloadsUrl)
    .then(function(download) {
      p.downloads = download.downloads;
    })
    .catch(function() {});
  }, {concurrency: 2});

  return Promise.all([bulk, individual]).then(function() {
    const previous = previousCounts();
    const missing = packages.filter(p => p.downloads == null);
    missing.forEach(function(p) {
      p.downloads = previous[p.name];
    });

    if (missing.length) {
      console.warn(`Couldn't fetch download counts for ${missing.length} of ${packages.length} plugins, using last known counts`);
    }

    return packages;
  });
}

let total = 0;
let packages = [];
getPlugins(0)
.then(function(data) {
  // set the total once
  total = data.total;

  return data;
})
.then(function getPluginsLoop(data) {
  packages.push.apply(packages, data.objects.map(data => data.package));

  // if we aren't at the total yet, wait a bit, and get the next set of  items
  if (packages.length < total) {
    return Promise.delay(200).then(() => getPlugins(packages.length).then(getPluginsLoop));
  }

  return packages;
})
.then(function(packages) {
  // get the download counts for each item
  console.log(`Fetching counts for ${packages.length} plugins...`)
  return getDownloadCounts(packages);
})
.then(function(packages) {
  fs.writeFileSync(dataPath, JSON.stringify(packages, null, 2));
});
