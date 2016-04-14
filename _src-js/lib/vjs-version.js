import http from 'http';

let pkgUrl = {
  host: 'crossorigin.me',
  path: '/https://registry.npmjs.org/video.js/latest'
};

function getPackage(cb) {
  cb(null, {
    version: "5.8.8",
    dependencies: {
      "videojs-ie8": "1.1.2"
    }
  });

  //http.get({host: pkgUrl.host, path: pkgUrl.path, withCredentials: false}, function(res) {
    //var body = '';
    //res.on('data', function(d) {
      //body += d;
    //});

    //res.on('end', function(e) {
      //body = JSON.parse(body);
      //cb(null, body);
    //});

  //}).on('error', function(e) {
    //cb(e);
  //});
}

export { getPackage };
