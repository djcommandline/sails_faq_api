
/**
* Grunt Icons.
*
* ---------------------------------------------------------------
*
      files: [{
        expand: true,
        cwd: 'assets/svg/icons/min',
        src: ['*.svg', '*.png'],
        dest: "assets/fonts/app"
      }],
*/
module.exports = function(grunt) {

  grunt.config.set('iconizr', {
    spriteSass    : {
      src         : ['assets/svg/icons/min'],
      dest        : 'assets/svg/iconizr',
      options     : {
        preview   : 'preview',
        dims      : true,
        keep      : true,
        render    : {
          css     : true,
          less    : '../../styles/icons/'
        },
        verbose   : 1
      }
    }
  });

  grunt.loadNpmTasks('grunt-iconizr');
};
