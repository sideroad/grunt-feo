/*
 * grunt-feo
 * http://sideroad.secret.jp/articles/front-end-optimization-tool/
 *
 * Copyright (c) 2013 sideroad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    feo: {
      options: {
        'js' : {
          'compressor' : 'yui-js',
          'ignore':[
            'ignore.js'
          ],
          'inline':true,
          'root' : 'examples/src'
        },
        'backgroundImage' : {
          'base64' : true
        },
        'css' : {
          'compressor' : 'yui-css',
          'ignore':['ignore.css'],
          'inline':true,
          'root' : 'examples/src'
        },
        'image' : {
          'base64' : true,
          'root' : 'examples/src'
        },
        'logLevel' : 3
      },
      example: {
        files: {
          'examples/dist': ['examples/src']
        }
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['feo']);

};
