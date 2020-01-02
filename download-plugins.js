const https = require('https');
const fs = require('fs');

https.get('https://registry.npmjs.org/-/v1/search?text=keywords:videojs-plugin,videojs-skin&size=250', (res) => {
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
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      let parsedData = JSON.parse(rawData);

      parsedData = parsedData.objects.map(data => data.package);

      const dir = __dirname + '/src/data/plugins.json';
      fs.writeFileSync(dir, JSON.stringify(parsedData, null, 2));
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
