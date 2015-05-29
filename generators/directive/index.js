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
      'You chose to create a directive for your app.'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'directiveName',
        message: 'What will be your directive\'s name?',
        default: 'main'
      },
      {
        type: 'input',
        name: 'moduleName',
        message: 'In which module would you like to add your new directive?',
        default: 'main'
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = this.fs.readJSON('package.json').name;
      this.moduleName = props.moduleName;
      this.directiveName = props.directiveName;
      done();
    }.bind(this));

    this.on('end', function () {
      this.log(yosay(
        'Do not forget to add your new directive in your module\'s definition file and add it to it\'s dependencies!' +
        'Be sure to properly name your directive when adding it to the dependencies, as it always needs to be in camelcase :-)'
      ));
    }.bind(this));
  },

  writing: {
    app: function () {
      var self = this;
      this.fs.copyTpl(
        this.templatePath('directive.js'),
        this.destinationPath('app/modules/' + this.moduleName + '/directives/' + this.directiveName + '-directive.js'),
        {directiveName: self.directiveName}
      );
    }
  }

});
