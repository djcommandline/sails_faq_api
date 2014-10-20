/**
* Compiles LESS files into CSS.
*
* ---------------------------------------------------------------
*
* Only the `assets/styles/importer.less` is compiled.
* This allows you to control the ordering yourself, i.e. import your
* dependencies, mixins, variables, resets, etc. before other stylesheets)
*
* For usage docs see:
* 		https://github.com/gruntjs/grunt-contrib-less
*/
module.exports = function(grunt) {

  grunt.config.set('less', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.less'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }],
      options: {
        compress: false,
        yuicompress: true,
        ieCompat: true,
        // LESS source map
        // To enable, set sourceMap to true and update sourceMapRootpath based on your install
        sourceMap: true,
        // sourceMapFilename: '_src/assets/css/app.min.css.map',
        // sourceMapURL: 'app.min.css.map',
        // sourceMapBasepath: 'dist',
        // sourceMapRootpath: '/'

        // sourceMapFilename: 'css/main.css.map', // where file is generated and located
        sourceMapFilename: '.tmp/public/styles/importer.css.map',
        sourceMapURL: '/styles/importer.css.map',
        sourceMapRootpath: ''
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
