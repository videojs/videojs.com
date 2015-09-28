module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./_harp/src-js/**/*'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ['watch', 'harp']
      }
    },
    harp: {
      server: {
        server: true,
        source: '_harp/public'
      },
      dist: {
        source: '_harp/public',
        dest: './'
      }
    },
    browserify: {
      dist: {
        files: {
          '_harp/public/js/index.js': ['_harp/src-js/index.js'],
          '_harp/public/js/home.js': ['_harp/src-js/home.js'],
          '_harp/public/js/plugins.js': ['_harp/src-js/plugins.js'],
					'_harp/public/js/support.js': ['_harp/src-js/support.js']
        },
        options: {
          external: ['videojsSite'],
          transform: [
            require('babelify').configure({})
          ]
        }
      }
    },
    copy: {
      fontawesome: {
        files: [
          {
            expand: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: '_harp/public/fonts',
            filter: 'isFile',
            flatten: true
          }
        ]
      },
      fontvjs: {
        files: [
          {
            expand: true,
            src: ['node_modules/video.js/dist/font/*'],
            dest: '_harp/public/fonts',
            filter: 'isFile',
            flatten: true
          }
        ]
      },
      stylevjs: {
        files: [
          {
            expand: true,
            src: ['node_modules/video.js/dist/video-js.css'],
            dest: '_harp/public/css/vendor',
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy:fontawesome', 'copy:stylevjs', 'copy:fontvjs', 'browserify', 'harp:dist']);
  grunt.registerTask('dev', ['browserify', 'concurrent']); // Browserify before starting concurrent things
};
