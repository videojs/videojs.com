module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['./src-js/**/*'],
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
        source: 'public'
      },
      dist: {
        source: 'public',
        dest: 'www'
      }
    },
    browserify: {
      dist: {
        files: {
          'public/js/index.js': ['src-js/index.js'],
          'public/js/plugins.js': ['src-js/plugins.js']
        },
        options: {
          external: ['videojs'],
          transform: [
            require('babelify').configure({
              sourceMapRelative: './src/js'
            })
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
            dest: 'public/fonts',
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
            dest: 'public/fonts',
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
            dest: 'public/css/vendor',
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
  grunt.registerTask('dev', ['copy', 'browserify', 'concurrent']); // Browserify before starting concurrent things
};
