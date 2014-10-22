module.exports = function (grunt) {
  grunt.registerTask('makeFonts', [
    'clean:fonts',
    'svgmin:dev',
    'grunticon:dev',
    'copy:font'
  ]);
};
