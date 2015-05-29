'use strict';

// The <%= moduleName %> module controller
class <%= _.capitalize(moduleName) %>Controller {

  constructor(<% if(hasResource) { %><%= moduleName %>Resource<% } %>) {
    <% if(hasResource) { %>
      this.<%= moduleName %>Resource = <%= moduleName %>Resource;
    <% } %>
    this.initialize();
  }

  // Call to initialize all data
  initialize() {}
}

<% if(hasResource) { %>
  // dependency injection for minification safety
  <%= _.capitalize(moduleName) %>Controller.$inject = ['<%= moduleName %>Resource'];
<% } %>

export default <%= _.capitalize(moduleName) %>Controller;
