module.exports = function (grunt) {
  grunt.registerTask('makeFonts', [
    'svgmin:dev',
    'iconizr',
    'sed:icons',
    'copy:icons'
  ]);
};
