module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        main: {
            files: [
                // includes files within path
                { src: ['bower_components/bootstrap/**'], dest: 'src/lib/' },
                { src: ['bower_components/angular/**'], dest: 'src/lib/' },
                { src: ['bower_components/jquery/**'], dest: 'src/lib/' }
            ],
        },
    }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Default task(s).
    grunt.registerTask('default', ['copy']);
  
  };