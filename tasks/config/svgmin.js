/**
* Grunt SVG min.
*
* ---------------------------------------------------------------
*
*/
module.exports = function(grunt) {

  grunt.config.set('svgmin', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/svg/icons/src',
        src: ['*.svg'],
        dest: 'assets/svg/icons/min'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-svgmin');
};
