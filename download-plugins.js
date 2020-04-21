const https = require('https');
const fs = require('fs');
const Promise = require('bluebird');

const pluginsUrl = new URL('https://registry.npmjs.org/-/v1/search?text=keywords:videojs,videojs-plugin,videojs-skin&size=250');

function get(url) {
  return new Promise(function(fulfill, reject) {

    https.get(url.href, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
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

function getPlugins(from) {
  pluginsUrl.searchParams.set('from', from);
  return get(pluginsUrl);
}

function getDownloadCount(package) {
  const downloadsUrl = new URL(`https://api.npmjs.org/downloads/point/last-week/${package.name}`);
  return get(downloadsUrl)
  .then(function(download) {
    package.downloads = download.downloads;
    return package;
  })
  .catch(function(e) {
    console.log(e);
    return package;
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
  return Promise.mapSeries(packages, getDownloadCount);
})
.then(function(packages) {
  const dir = __dirname + '/src/data/plugins.json';
  fs.writeFileSync(dir, JSON.stringify(packages, null, 2));
});
