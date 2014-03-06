module.exports = function(grunt) {
  try {
    s3config = grunt.file.readJSON('.s3config.json');
  } catch(e) {
    s3config = {};
  }

  var vjsversion = JSON.parse(grunt.file.read('node_modules/video.js/package.json')).version;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    s3: {
      options: s3config,
      staging: {
        options: {
          bucket: 'staging.videojs.com'
        },
        // Files to be uploaded.
        upload: [
          {
            src: 'build/**/**',
            dest: '/',
            rel: 'build/'
          }
        ]
      },
      production: {
        options: {
          bucket: 'www.videojs.com'
        },
        // Files to be uploaded.
        upload: [
          {
            src: 'build/**/**',
            dest: '/',
            rel: 'build/'
          }
        ]
      }
    },
    cloudfront_clear: {
      invalidateAll: {
        resourcePaths: ["/"],
        secret_key: s3config.secret,
        access_key: s3config.key,
        dist: s3config.cloudfront_distribution_id
      }
    },
    version: {
      options: {
        pkg: 'node_modules/video.js/package.json'
      },
      layout: {
        options: {
          prefix: 'vjs.zencdn.net/'
        },
        src: ['templates/layout.jade']
      },
      download: {
        options: {
          prefix: '/downloads/video-js-'
        },
        src: ['templates/layout.jade']
      }
    },
    shell: {
      options: {
        failOnError: true
      },
      'wintersmith-build': { command: 'wintersmith build' },
      'npm-update-videojs': { command: 'npm update video.js' }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-cloudfront-clear');
  grunt.loadNpmTasks('grunt-version');
  grunt.loadNpmTasks('grunt-shell');

  // deploy: staging
  grunt.registerTask('deploy:staging', [
    's3:staging', 
    'redirects:staging'
  ]);

  // deploy:production
  grunt.registerTask('deploy:production', [
    's3:production',
    'redirects:production',
    'cloudfront_clear'
  ]);

  // release
  grunt.registerTask('release', [
    'shell:npm-update-videojs',    // get the latest video.js version
    'cdn-links',                   // update site CDN links
    'version:layout',              // update player links used on site
    'zip',                         // zip the video.js dist for download
    'version:download',            // update links to the download file
    'shell:wintersmith-build'      // build the new site
  ]);

  grunt.registerTask('cdn-links', 'Update the version of CDN links', function(){
    var index = grunt.file.read('templates/index.jade');
    var version = JSON.parse(grunt.file.read('node_modules/video.js/package.json')).version;

    // remove the patch version to point to the latest patch
    version = version.replace(/(\d\.\d)\.\d/, '$1');

    // update the version in http://vjs.zencdn.net/4.3/video.js
    index = index.replace(/(http:\/\/vjs\.zencdn\.net\/)\d\.\d(\.\d)?/g, '$1'+version);
    grunt.file.write('templates/index.jade', index);
  });

  grunt.registerTask('zip', 'Zip video.js folder', function(){
    // grunt-zip was giving me issues when using DEFLATE. The zip files would
    // error when you tried to unzip them, "No such file or directory"

    vjsversion = JSON.parse(grunt.file.read('node_modules/video.js/package.json')).version;

    var exec = require('child_process').exec;
    var done = this.async();
    var dirLoc = 'node_modules/video.js/dist';

    var zipFile = 'contents/downloads/video-js-'+vjsversion+'.zip';
    var cd1 = 'cd node_modules/video.js/dist';
    var zip = 'zip -r ../../../'+zipFile+' video-js';
    var cd2 = 'cd ../../../';

    exec(cd1+' && '+zip+' && '+cd2, { maxBuffer: 500*1024 }, function(err, stdout, stderr){

      if (err) {
        grunt.log.error(err);
        return done(false);
      }

      if (stdout) {
        grunt.log.writeln(stdout);
      }

      done();
    });
  });

  grunt.registerTask('redirects', 'Created redirects on s3', function(arg1) {
    var done = this.async();    
    var s3 = require('grunt-s3')().s3;
    var redirects = grunt.file.readJSON('redirects.json');
    var redirectConfig;
    var bucket;

    if (arg1 === 'production') {
      bucket = 'www.videojs.com';
    } else {
      bucket = 'staging.videojs.com'
    }

    for (src in redirects) {
      // Reset options object so we're not copying between
      redirectConfig = {};
      for (key in s3config) {
        redirectConfig[key] = s3config[key];
      }
      redirectConfig.bucket = bucket;
      redirectConfig.headers = {
        'x-amz-website-redirect-location': redirects[src]
      };

      var upload = s3.upload('README.md', src, redirectConfig);
      // It does not work without this step.
      upload
        .done(function(msg) {
          console.log(msg);
        })
        .fail(function(err) {
          console.log(err);
        })
        .always(function() {
          console.log('dance!');
        });
    }
  });

};