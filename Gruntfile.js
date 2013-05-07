module.exports = function(grunt) {

  try {
    s3 = grunt.file.readJSON('.s3config.json');
  } catch(e) {
    s3 = {};
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    s3: {
      options: s3,
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
          },
          {
            src: 'README.md',
            dest: 'docs/index.html',
            options: {
              headers: {
                'x-amz-website-redirect-location': 'http://github.com'
              }
            }
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-s3');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};