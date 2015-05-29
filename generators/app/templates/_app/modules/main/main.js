'use strict';

import mainResource from './main-resource';
import mainController from './main-controller';
import mainConfig from './main-config';

// Defines the main module
var mainModule = angular.module('mainModule', [])
  .service('mainResource', mainResource)
  .controller('mainController', mainController)
  .config(mainConfig);

export default mainModule;
