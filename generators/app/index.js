'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('AngularEs6') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'What will be your app\'s name?',
        default: path.basename(process.cwd())
      }
    ];

    this.prompt(prompts, function (props) {
      this.skipInstall = true;
      this.appName = props.appName;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var self = this;

      [
        ['_fixtures/*.json', 'app/fixtures'],
        ['_resources/**/**', 'resources'],
        ['_Gruntfile.js', 'Gruntfile.js']
      ].forEach(function(pair) {
        self.fs.copy(
          self.templatePath(pair[0]),
          self.destinationPath(pair[1])
        );
      });

      [
        ['_app/**/**', 'app'],
        ['_index.html', 'index.html'],
        ['_config.js', 'config.js'],
        ['_package.json', 'package.json'],
        ['_karma.conf.js', 'karma.conf.js'],
        ['_prod_constants.js', 'prod_constants.js'],
        ['_dev_constants.js', 'dev_constants.js']
      ].forEach(function(pair) {
        self.fs.copyTpl(
          self.templatePath(pair[0]),
          self.destinationPath(pair[1]),
          {appName: self.appName}
        )
      });      
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    if(!this.skipInstall) {
      this.npmInstall();
      this.spawnCommand('jspm', ['install']);
    }
  }
});
