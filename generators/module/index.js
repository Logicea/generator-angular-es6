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
      'You chose to create a module for your app.'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What will be your module\'s name?',
        default: 'custom'
      },
      {
          type: 'confirm',
          name: 'hasResource',
          message: 'Would you like to add a resource service for your module?',
          default: false
      }
    ];

    this.prompt(prompts, function (props) {
      this.appName = this.fs.readJSON('package.json').name;
      this.moduleName = props.moduleName;
      this.hasResource = props.hasResource;
      done();
    }.bind(this));

    this.on('end', function () {
      this.log(yosay(
        'Do not forget to import your new module in app.js and add it to it\'s dependencies!'
      ));
    }.bind(this));
  },

  writing: {
    app: function () {
      var self = this;
      [
        ['_module/tests/module-controller.js', 'app/modules/' + this.moduleName + '/tests/' + this.moduleName + '-controller.js'],
        ['_module/module.html', 'app/modules/' + this.moduleName + '/' + this.moduleName + '.html'],
        ['_module/module.less', 'app/modules/' + this.moduleName + '/' + this.moduleName + '.less'],
        ['_module/module.js', 'app/modules/' + this.moduleName + '/' + this.moduleName + '.js'],
        ['_module/module-config.js', 'app/modules/' + this.moduleName + '/' + this.moduleName + '-config.js'],
        ['_module/module-controller.js', 'app/modules/' + this.moduleName + '/' + this.moduleName + '-controller.js']
      ].forEach(function(pair) {
        self.fs.copyTpl(
          self.templatePath(pair[0]),
          self.destinationPath(pair[1]),
          {moduleName: self.moduleName, appName: self.appName, hasResource: self.hasResource}
        );
      });

      if(this.hasResource) {
        this.fs.copyTpl(
          this.templatePath('_module/module-resource.js'),
          this.destinationPath('app/modules/' + this.moduleName + '/' + this.moduleName + '-resource.js'),
          {moduleName: this.moduleName, appName: this.appName, hasResource: this.hasResource}
        );
      }

    }
  }

});
