var sh = require('shelljs');
var tags = sh.exec('npm dist-tag ls video.js', {silent: true}).stdout;
var latest = tags.split('\n').map((t) => t.split(': ')).filter((t) => t[0] === 'latest')[0][1];

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
      },
      vjsversion: {
        files: ['./_harp/js/index.js'],
        tasks: ['vjsversion:js']
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
    },
    vjsversion: {
      js: {
        src: ['_harp/js/index.js']
      },
      html: {
        src: ['_www/getting-started/index.html']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerMultiTask('vjsversion', 'update vjs-version stuff', function() {
    this.files.forEach(function(file) {
      file.src.forEach(function(filePath) {
        if (!grunt.file.exists(filePath)) {
          return;
        }

        var file = grunt.file.read(filePath, {encoding: 'utf8'});

        if (file.indexOf('$LATEST_VERSION$') !== -1) {
          grunt.file.write(filePath, file.replace(/\$LATEST_VERSION\$/g, latest), {encoding: 'utf8'});
        }
      });
    });
  });

  // Default task(s).
  grunt.registerTask('default', ['vjsversion', 'copy:fontawesome', 'copy:vendor', 'copy:stylevjs', 'copy:fontvjs', 'browserify:dist', 'vjsversion:js', 'harp:dist', 'vjsversion:html']);
  grunt.registerTask('dist', ['default', 'copy:dist']);
  grunt.registerTask('dev', ['default', 'concurrent']);

};
