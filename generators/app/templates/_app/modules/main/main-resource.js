'use strict';

// The resource service for the main module
class MainResource {
  constructor($resource, REST_ENDPOINT) {
    this.$resource = $resource;
    this.REST_ENDPOINT = REST_ENDPOINT;
  }

  // resource for some data
  someData() {
    return this.$resource(this.REST_ENDPOINT.somedata);
  }

}

// dependency injection for minification safety
MainResource.$inject = ['$resource', 'REST_ENDPOINT'];

export default MainResource;
