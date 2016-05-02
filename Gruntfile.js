module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./_src-js/**/*'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
      vendor: {
        files: ['./node_modules/videojs-playlist-ui/dist/*'],
        tasks: ['copy:vendor']
      }
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
        source: '_harp'
      },
      dist: {
        source: '_harp',
        dest: '_www'
      }
    },
    browserify: {
      dist: {
        files: {
          '_harp/js/index.js': ['_src-js/index.js'],
          '_harp/js/home.js': ['_src-js/home.js'],
          '_harp/js/advanced.js': ['_src-js/advanced.js'],
          '_harp/js/plugins.js': ['_src-js/plugins.js'],
          '_harp/js/support.js': ['_src-js/support.js']
        },
        options: {
          transform: [
            require('babelify').configure({}),
            [require('browserify-global-shim').configure({
              'video.js': 'videojs'
            }), {global: true}]
          ]
        }
      }
    },
    copy: {
      vendor: {
        files: [
          {
            expand: true,
            src: 'node_modules/videojs-playlist-ui/dist/*',
            dest: '_harp/vendor/videojs-playlist-ui/',
            flatten: true
          }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '_www',
            src: ['**'],
            dest: './'
          }
        ]
      },
      fontawesome: {
        files: [
          {
            expand: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: '_harp/fonts',
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
            dest: '_harp/fonts',
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
            dest: '_harp/css/vendor',
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
  grunt.registerTask('default', ['copy:fontawesome', 'copy:vendor', 'copy:stylevjs', 'copy:fontvjs', 'browserify', 'harp:dist']);
  grunt.registerTask('dist', ['default', 'copy:dist']);
  grunt.registerTask('dev', ['browserify', 'concurrent']); // Browserify before starting concurrent things
};
