module.exports = function(grunt) {

  try {
    s3config = grunt.file.readJSON('.s3config.json');
  } catch(e) {
    s3config = {};
  }

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
        resourcePaths: ["/css/main.css"],
        secret_key: s3config.secret,
        access_key: s3config.key,
        dist: s3config.cloudfront_distribution_id
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-s3');
  grunt.loadNpmTasks('grunt-cloudfront-clear');

  // Default task(s).
  // grunt.registerTask('default', ['redirects:staging']);
  grunt.registerTask('deploy:staging', ['s3:staging', 'redirects:staging']);

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