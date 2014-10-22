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
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: [
                                  '**/*.!(coffee|less)',
                                  '!favisrc',
                                  '!fav/favisrc/*',
                                  '!fav/include.txt'
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
                        }]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
		font: {
			files: [
				{
					expand: true,
					cwd: 'assets/fonts/app',
					src: ['**/grunticon.loader.js'],
					dest: 'assets/js/dependencies/preload/grunticon'
				},
				{
					expand: true,
					cwd: 'assets/fonts/app',
					src: ['**/icons*'],
					dest: '.tmp/public/fonts'
				}
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
