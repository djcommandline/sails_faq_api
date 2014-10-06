module.exports = function (grunt) {
  grunt.registerTask('optimize', [
    'svgmin:dev',
    'imagemin:dev',
  ]);
};
