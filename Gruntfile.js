module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'dist/css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass:dev'],
        options: {
          livereload: true,
        },
      },
    },

  });



  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['compass:dev']);

};