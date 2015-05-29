'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-es6:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      'package.json',
      '.editorconfig',
      '.jshintrc',
      'config.js',
      'karma.conf.js',
      'Gruntfile.js',
      'index.html'
    ]);
  });

  it('creates application files', function() {
    assert.file([
      'app/modules/main/tests/main-controller.js',
      'app/modules/main/main.js',
      'app/modules/main/main-controller.js',
      'app/modules/main/main-config.js',
      'app/modules/main/main-resource.js',
      'app/modules/main/main.html',
      'app/modules/main/main.less',
      'app/fixtures/somedata.json'
    ]);
  });

  it('creates resource files', function() {
    assert.file([
      'resources/less/common.less'
    ]);
  });

});
