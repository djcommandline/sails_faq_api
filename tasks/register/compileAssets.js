module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'makeFonts',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
