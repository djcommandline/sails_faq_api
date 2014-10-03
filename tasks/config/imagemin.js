/**
* Grunt SVG min.
*
* ---------------------------------------------------------------
*
*/
module.exports = function(grunt) {

  grunt.config.set('imagemin', {
    dev: {
      options: {
        interlaced: true,
        optimizationLevel: 3,
        progressive: true
      },
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'assets/images',                   // Src matches are relative to this path
        src: ['*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'assets/images/opt'                  // Destination path prefix
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
};
