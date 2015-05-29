'use strict';

<% if(hasResource) { %>import <%= moduleName %>Resource from './<%= moduleName %>-resource';<% } %>
import <%= moduleName %>Controller from './<%= moduleName %>-controller';
import <%= moduleName %>Config from './<%= moduleName %>-config';

// Defines the <%= moduleName %> module
var <%= moduleName %>Module = angular.module('<%= moduleName %>Module', [])
  <% if(hasResource) { %>.service('<%= moduleName %>Resource', <%= moduleName %>Resource)<% } %>
  .controller('<%= moduleName %>Controller', <%= moduleName %>Controller)
  .config(<%= moduleName %>Config);

export default <%= moduleName %>Module;
