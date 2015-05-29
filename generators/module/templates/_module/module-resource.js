'use strict';

// The resource service for the <%= moduleName %> module
class <%= _.capitalize(moduleName) %>Resource {
  constructor($resource, REST_ENDPOINT) {
    this.$resource = $resource;
    this.REST_ENDPOINT = REST_ENDPOINT;
  }

  // resource for some data
  <%= moduleName %>Data() {
    return this.$resource(this.REST_ENDPOINT.<%= moduleName %>data);
  }

}

// dependency injection for minification safety
<%= _.capitalize(moduleName) %>Resource.$inject = ['$resource', 'REST_ENDPOINT'];

export default <%= _.capitalize(moduleName) %>Resource;
