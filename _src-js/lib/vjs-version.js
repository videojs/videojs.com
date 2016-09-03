import http from 'http';

let pkgUrl = {
  host: 'unpkg.com',
  path: '/video.js@latest/package.json'
};

const defaults = {
  version: "5.8.8",
  dependencies: {
    "videojs-ie8": "1.1.2"
  }
};


function getPackage(cb) {
  http.get({host: pkgUrl.host, path: pkgUrl.path, withCredentials: false}, function(res) {
    var body = '';
    res.on('data', function(d) {
      body += d;
    });

    res.on('end', function(e) {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = defaults;
      }
      cb(null, body);
    });

  }).on('error', function(e) {
    cb(e, defaults);
  });
}

export { getPackage };
