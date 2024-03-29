/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

  grunt.config.set('sed', {
    icons       : {
    pattern     : 'icons\/',
    path        : 'assets/svg/iconizr',
    replacement : '/assets/icons/',
    recursive   : true
    }
  });

  grunt.loadNpmTasks('grunt-sed');
};
