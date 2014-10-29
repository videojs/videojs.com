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
    replace: {
       version_urls: {
        options: {
          patterns: [
            { // Patch urls (e.g. /4.5.0/)
              match: /(vjs\.zencdn\.net\/)\d+\.\d+\.\d+/g,
              replacement: '$1'+vjsversion,
            },
            { // Minor urls (e.g /4.5/)
              match: /(vjs\.zencdn\.net\/)\d+\.\d+\//g,
              replacement: '$1'+vjsversion.replace(/(\d+\.\d+)\.\d+/, '$1')+'/',
            },
            { // Download link
              match: /(\/downloads\/video-js-)\d+\.\d+\.\d+/g,
              replacement: '$1'+vjsversion,
            }
          ]
        },
        files: [
          { src: ['templates/index.jade'], dest: 'templates/index.jade' },
          { src: ['templates/layout.jade'], dest: 'templates/layout.jade' }
        ]
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
  grunt.loadNpmTasks('grunt-replace');
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
    'zip',                         // zip the video.js dist for download
    'replace:version_urls',        // update file version urls used on site
    'shell:wintersmith-build'      // build the new site
  ]);

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
    var redirectConfig = {};

    if (arg1 === 'production') {
      redirectConfig.bucket = 'www.videojs.com';
    } else {
      redirectConfig.bucket = 'staging.videojs.com'
    }

    for (key in s3config) {
      redirectConfig[key] = s3config[key];
    }

    var redirectKeys = Object.keys(redirects);
    var i = 0;

    function next(){
      var from = redirectKeys[i];
      var to = redirects[from];

      redirectConfig.headers = {
        'x-amz-website-redirect-location': to
      };

      var upload = s3.upload('README.md', from, redirectConfig);
      // It does not work without this step.
      upload
        .done(function(msg) {
          console.log('Uploaded: '+from);

          if (i == (redirectKeys.length-1)) {
            done();
          } else {
            i++;
            next();
          }
        })
        .fail(function(err) {
          grunt.log.error(err);
        });
    };
    next();
  });

};