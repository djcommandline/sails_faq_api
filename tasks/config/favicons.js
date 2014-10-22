/**
* grunt favicons
* Generate favicon.ico and icons for iOS, Android and WP8
* @ref https://github.com/gleero/grunt-favicons
*
* ---------------------------------------------------------------
*
*/
module.exports = function(grunt) {

  grunt.config.set('favicons', {
    dev: {
      options: {
        trueColor: true,
        precomposed: true,
        appleTouchBackgroundColor: "#e2b2c2",
        coast: true,
        windowsTile: true,
        tileBlackWhite: false,
        tileColor: "auto",
        html: 'assets/fav/include.txt',
        HTMLPrefix: ""
      },
      files: [{
        expand: true,               // Enable dynamic expansion
        cwd: 'assets',      // Src matches are relative to this path
        src: ['favisrc'],               // Actual patterns to match
        dest: 'assets/fav'      // Destination path prefix
      }]
    }

  });

  grunt.loadNpmTasks('grunt-favicons');
};
