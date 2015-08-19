import http from 'http';

let pkgUrl = {
  host: 'rawgit.com',
  path: '/videojs/video.js/master/package.json'
};

function getPackage(cb) {
  http.get({host: pkgUrl.host, path: pkgUrl.path, withCredentials: false}, function(res) {
    var body = '';
    res.on('data', function(d) {
      body += d;
    });

    res.on('end', function(e) {
      body = JSON.parse(body);
      cb(null, body);
    });

  }).on('error', function(e) {
    cb(e);
  });
}

export { getPackage };
