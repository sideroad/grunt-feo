/*
 * grunt-feo
 * http://sideroad.secret.jp/articles/front-end-optimization-tool/
 *
 * Copyright (c) 2013 sideroad
 * Licensed under the MIT license.
 */

var _ = require('underscore'),
    feo = require('feo'),
    async = require('async');

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('feo', 'optimize front-end', function() {
    var done = this.async(),
        options = this.options({
        }),
        args = [];

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var arg = _.extend({}, options);
        arg.url = filepath;
        arg.dist = f.dest;
        args.push(arg);
      });
    });

    async.mapSeries(args, function(arg, callback){
      feo.on('exit', function(err){
        callback(err);
      });
      feo.cli(arg);
    }, function(err){
      done(!err);
    });
  });

};
