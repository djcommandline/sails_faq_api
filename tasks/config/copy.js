/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://<git></git>hub.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: [
          '**/*.!(coffee|less)',
          '!**/fav/**',
          '!**/svg/**',
          '!robots.txt'
        ],
        dest: '.tmp/public'
      },
      {
        expand: true,
        cwd: './assets/fav/favisrc',
        src: [
          '*',
        ],
        dest: '.tmp/public'
      },
      {
        src: ['assets/robots.txt'],
        dest: '.tmp/public/robots.txt'
      }
      ]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    icons: {
      files: [{
        expand: true,
        cwd: './assets/svg/iconizr',
        src: [
          'icons/*',
          '!*.css',
          '!**/preview/**',
        ],
        dest: '.tmp/public/assets'
      },
      {
        expand: true,
        cwd: './assets/svg/iconizr',
        src: [
          '*.css',
        ],
        dest: '.tmp/public/assets/css'
      },
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
