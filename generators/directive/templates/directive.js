'use strict';

// The <%= _.capitalize(directiveName) %>Directive
class <%= _.capitalize(directiveName) %>Directive {

  constructor() {
    this.restrict = 'E',
    this.scope = {}
  }

  compile(element) {
    return angular.bind(this, this.link);
  }

  link(scope, element, attrs) {

    scope.render();

    scope.render = () => {
      // do something with the element
    }
  }

  // factory for instantiating the directive
  static directiveFactory() {
    return new <%= _.capitalize(directiveName) %>Directive();
  }
}

export default <%= _.capitalize(directiveName) %>Directive;
