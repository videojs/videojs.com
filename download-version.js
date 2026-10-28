const https = require('https');
const fs = require('fs');

https.get('https://registry.npmjs.org/video.js', (res) => {
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

      // This site documents Video.js 8; `latest` is Video.js 10 now.
      const version = parsedData['dist-tags']['latest-8'];

      console.log(version);
      fs.writeFileSync(
        __dirname + '/src/data/videojs-version.json',
        JSON.stringify({version}, null, 2));
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
