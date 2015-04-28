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
          'public/js/bundle.js': ['src-js/app.js']
        }
      }
    },
    copy: {
      font: {
        files: [
          {
            expand: true,
            src: ['node_modules/font-awesome/fonts/*'],
            dest: 'public/fonts',
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
  grunt.registerTask('default', ['copy:font', 'browserify', 'harp:dist']);
  grunt.registerTask('dev', ['concurrent']);
};
