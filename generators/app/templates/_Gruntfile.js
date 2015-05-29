'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('assemble-less');
  var pushState = require('grunt-connect-pushstate/lib/utils').pushState;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      dist: 'dist'
    },
    // clean the dist folder
    clean: {
      dist: ['<%= config.dist %>/*.*', './tmp']
    },
    // copy the constants based on the stage
    copy: {
      development: {
        src: 'dev_constants.js',
        dest: 'app/constants.js'
      },
      production: {
        src: 'prod_constants.js',
        dest: 'app/constants.js'
      }
    },
    // build the bundle
    exec: {
      jspm_dev: 'node_modules/.bin/jspm bundle-sfx app/app  <%= config.dist %>/build.js',
      jspm_prod: 'node_modules/.bin/jspm bundle-sfx app/app --minify <%= config.dist %>/build.js'
    },
    // concatenate all less files to one and add the bjt.less import
    concat: {
      dist: {
        src: ['resources/less/common.less', 'app/modules/**/*.less'],
        dest: '.tmp/styles.less'
      }
    },
    // compile, concat and compress all less files to a single css file
    less: {
      dist: {
        options: {
          compress: true,
          paths: ['resources/less/']
        },
        files: {
          '<%= config.dist %>/styles.min.css': ['.tmp/styles.less']
        }
      }
    },
    // add versioning to the build.js and styles.min.css files
    filerev: {
      assets: { src: '<%= config.dist %>/*.{css,js}'}
    },
    filerev_replace: {
      options: {
        assets_root: '<%= config.dist %>'
      },
      compiled_assets: {
        src: ['<%= config.dist %>/*.js', '<%= config.dist %>/*.css']
      },
      views: {
        views_root: '.',
        src: 'index.html'
      }
    },
    // connect
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.'
          ],
          middleware: function (connect, options) {
            return [
              // Rewrite requests to root so they may be handled by router
              pushState(),

              // Serve static files
              connect.static(options.base[0])
            ];
          }
        }
      }
    },
    // watch
    watch: {
      scripts: {
        files: ['app/**/*.js', 'app/**/*.html', 'index.html', 'app/**/*.less'],
        tasks: ['clean:dist', 'copy:development', 'exec:jspm_dev', 'concat', 'less:dist'],
        options: {
          spawn: false,
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
    // testing
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome'],
        singleRun: true
      }
    },
    // documentation generation
    docco: {
      dist: {
        src: ['README.md', 'app/modules/**/*.js', '!app/modules/**/tests/*.js'],
        options: {
          output: 'docs/'
        }
      }
    }
  });

  // serve for development with livereload and watch
  grunt.registerTask('serve', function(target) {
    grunt.task.run(
      [
        'clean:dist',
        'copy:development',
        'exec:jspm_dev',
        'concat',
        'less:dist',
        'connect:livereload',
        'watch'
      ]);
  });

  // serve the production version
  grunt.registerTask('run', function(target) {
    grunt.task.run(
      [
        'clean:dist',
        'copy:production',
        'exec:jspm_prod',
        'concat',
        'less:dist',
        'filerev:assets',
        'filerev_replace',
        'connect:livereload:keepalive'
      ]);
  });

  // run the unit tests
  grunt.registerTask('test', function(target) {
    grunt.task.run(['karma:unit']);
  })

  // generate the documentation pages
  grunt.registerTask('docs', function(target) {
    grunt.task.run(['docco']);
  });

  // build for production
  grunt.registerTask('build', function(target) {
    grunt.task.run(
      [
        'clean:dist',
        'copy:production',
        'karma:unit',
        'exec:jspm_prod',
        'concat',
        'less:dist',
        'filerev:assets',
        'filerev_replace'
      ]);
  });

}
