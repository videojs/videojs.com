const https = require('https');
const fs = require('fs');
const Promise = require('bluebird');

const url = new URL('https://registry.npmjs.org/-/v1/search?text=keywords:videojs-plugin,videojs-skin&size=100');

function getPlugins(from) {
  return new Promise(function(fulfill, reject) {
    url.searchParams.set('from', from);

    console.log(url.href);
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

let total = 0;
let packages = [];
getPlugins(0)
.then(function(data) {
  console.log(data.objects.length, data.total);
  total = data.total;

  return data;
})
.then(function getPluginsLoop(data) {
  packages.push.apply(packages, data.objects.map(data => data.package));

  console.log(packages.length, total);

  if (packages.length < total) {
    return Promise.delay(1000).then(getPlugins(packages.length)).then(getPluginsLoop);
  }

  return packages;
  // parsedData = parsedData.objects.map(data => data.package);
  //
  // const dir = __dirname + '/src/data/plugins.json';
  // fs.writeFileSync(dir, JSON.stringify(parsedData, null, 2));
})
.then(function(packages) {
  console.log(packages.length);
});
