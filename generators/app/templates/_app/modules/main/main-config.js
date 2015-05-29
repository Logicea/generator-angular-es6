'use strict';

import mainTemplate from './main.html!text';

// Main module configuration
function Config($stateProvider, $urlRouterProvider, $locationProvider) {

  // define the main states (routes)
  $stateProvider
    .state('main', {
      url: '/main/',
      template: mainTemplate,
      controller: 'mainController',
      controllerAs: 'mainc'
    });
}

// dependency injection for minification safety
Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default Config;
