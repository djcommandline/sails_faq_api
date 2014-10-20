/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {

			// API files to watch:
			files: ['api/**/*']
		},
		assets: {

			// Assets to watch:
			files: ['assets/**/*', 'tasks/pipeline.js'],

			// When assets are changed:
			tasks: ['syncAssets' , 'linkAssets']
		},
    livereload: {

      // Browser live reloading @ref :: https://github.com/gruntjs/grunt-contrib-watch#live-reloading
      options: {
        livereload: true
      },
			// Assets to watch:
			files: [
				'.tmp/public/styles/*',
				'.tmp/public/js/**/*'
			]
    }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
