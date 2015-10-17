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
        cwd: 'src', // set working folder / root to copy
        src: '**/*', // copy all files and subfolders
        dest: 'dist', // destination folder
        expand: true // required when using cwd
      }
    },

      // don't keep passwords in source control
      secret: grunt.file.readJSON('secret.json'),
      sftp: {
        deploy: {
          files: {
            "./": "dist/**"
          },
          options: {
            path: '/',
            host: '<%= secret.host %>',
            username: '<%= secret.username %>',
            password: '<%= secret.password %>',
            showProgress: true,
              srcBasePath: "dist/",
              createDirectories: true
          }
        }
      }

  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('copy', ['copy']);
  grunt.registerTask('build', ['less', 'copy', 'sftp']);
  grunt.registerTask('dev', ['less', 'copy']);

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-ssh');
};
