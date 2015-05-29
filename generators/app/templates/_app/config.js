'use strict';

// Global app configuration
function Config($stateProvider, $urlRouterProvider, $locationProvider) {

  // enable history pushstate
  $locationProvider.html5Mode(true).hashPrefix('!');

  // set the default route
  $urlRouterProvider.otherwise("/main/");
}

// Global app event handling
function Run($rootScope, $state, authService) {

}

// dependency injection for minification safety
Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
Run.$inject = ['$rootScope', '$state'];

export {Config as Config};
export {Run as Run};
