'use strict';

import <%= moduleName %>Template from './<%= moduleName %>.html!text';

// <%= moduleName %> module configuration
function Config($stateProvider, $urlRouterProvider, $locationProvider) {

  // define the <%= moduleName %> states (routes)
  $stateProvider
    .state('<%= moduleName %>', {
      url: '/<%= moduleName %>/',
      template: <%= moduleName %>Template,
      controller: '<%= moduleName %>Controller',
      controllerAs: '<%= moduleName %>c'
    });
}

// dependency injection for minification safety
Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default Config;
