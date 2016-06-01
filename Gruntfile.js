module.exports = function(grunt) {

  var getBrowserifyOptions = function(watchify) {
    var options = {
      transform: [
        'babelify',
        [require('browserify-global-shim').configure({
          'video.js': 'videojs'
        }), {global: true}]
      ],
    };
    var files = {
      '_harp/js/index.js': ['_src-js/index.js'],
      '_harp/js/home.js': ['_src-js/home.js'],
      '_harp/js/advanced.js': ['_src-js/advanced.js'],
      '_harp/js/plugins.js': ['_src-js/plugins.js'],
      '_harp/js/support.js': ['_src-js/support.js']
    };

    if (watchify) {
      options.watch = true;
      options.keepAlive = true;
      options.watchifyOptions = {
        verbose: true
      };
    }

    return {
      files: files,
      options: options
    };
  };

  // Project configuration.
  grunt.initConfig({
    watch: {
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
        tasks: ['watch', 'browserify:watch', 'harp']
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
      dist: getBrowserifyOptions(),
      watch: getBrowserifyOptions(true)
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
  grunt.registerTask('default', ['copy:fontawesome', 'copy:vendor', 'copy:stylevjs', 'copy:fontvjs', 'browserify:dist', 'harp:dist']);
  grunt.registerTask('dist', ['default', 'copy:dist']);
  grunt.registerTask('dev', ['concurrent']);
};
