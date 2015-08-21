module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "src/css/styles.css": "less/styles.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    copy: {
      files: {
        cwd: 'src',  // set working folder / root to copy
        src: '**/*',           // copy all files and subfolders
        dest: 'dist',    // destination folder
        expand: true           // required when using cwd
      }
    },
    deploy: {

    }
  });



  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('copy', ['copy']);
  grunt.registerTask("deploy', 'less', 'copy', 'deploy");
  grunt.loadNpmTasks('grunt-contrib-copy');
};
