
/**
* Grunt Icons.
*
* ---------------------------------------------------------------
*
*/
module.exports = function(grunt) {

  grunt.config.set('grunticon', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/svg/icons/min',
        src: ['*.svg', '*.png'],
        dest: "assets/fonts/app"
      }],
      options: {
        defaultWidth: '56px',
        defaultHeight: '56px'
      }
    }
  });

  grunt.loadNpmTasks('grunt-grunticon');
};
