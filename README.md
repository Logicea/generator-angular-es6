# generator-angular-es6

> [Yeoman](http://yeoman.io) generator for AngularJS 1.3 with javascript ES6 (or javascript 2015) support.

### Prerequisites for using this generator

- [node](https://nodejs.org/) as the javascript runtime. To install read [this](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) in case your flavour is Linux or [this](https://nodejs.org/download/) otherwise.
- [grunt](http://gruntjs.com/) for task management. To install read [this](http://gruntjs.com/getting-started)
- [jspm](http://jspm.io) for package management. To install read [this](https://github.com/jspm/jspm-cli/wiki/Getting-Started)

### What's baked in

- [bootstrap](http://getbootstrap.com/getting-started/), the [less](http://lesscss.org/) version.
- [babel](https://babeljs.io/) as the es6 transpiler.
- [karma](http://karma-runner.github.io/0.12/index.html) as the testing runner with [jasmine](http://jasmine.github.io/)
 as the testing library.
- [angular-ui-router](https://github.com/angular-ui/ui-router) as the router provider.

And, as mentioned above, jspm for package management.

### Getting started

To install generator-angular-es6 from npm, run:

```bash
npm install -g git+https://github.com/Logicea/generator-angular-es6.git
```

Finally, initiate the generator:

```bash
yo angular-es6
```

The above command will produce a file structure like the one below:

```
.
app.js
config.js
Gruntfile.js
index.html
karma.conf.js
package.json
app
|-- fixtures
|-- somedata.json
|-- modules
    |-- main
    |-- main.js
    |-- main-config.js
    |-- main-controller.js
    |-- main-resource.js
    |-- main.html
    |-- main.less
|-- resources
    |-- common
    |-- common.less
```

### Add a new module to your generated app

To add a new module to your generated app, run:

```yo angular-es6:module```

The above will add a new module, by the given name, in your app, following the structure of the
main module described above. **Note: You 'll need to add the new module in app/app.js yourself, once generated.**

### Add a new directive to one of your modules

To add a new directive to one of your modules, run:

```yo angular-es6:directive```

The above will add a new directive, by the given name, under the given's module directives folder.
**Note: You 'll need to import the new directive to your module's definition file and add it as a dependency.**

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

MIT
