'use strict';

// The main module controller
class MainController {

  constructor(mainResource) {
    this.mainResource = mainResource;
    this.initialize();
  }

  // Call to initialize all data
  initialize() {

    //fetch the data
    this.mainResource.someData().get(angular.bind(this, function(data) {
      this.someData = data.toJSON().somedata;
    }));

  }
}

// dependency injection for minification safety
MainController.$inject = ['mainResource'];

export default MainController;
