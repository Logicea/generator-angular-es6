import 'angular';
import 'angular-mocks';

describe('The <%= moduleName %> controller', () => {

  beforeEach(angular.mock.module('<%= appName %>App'));

  let <%= moduleName %>Controller, $httpBackend;

  beforeEach(inject((_$controller_, _$httpBackend_, REST_ENDPOINT) => {
    let $controller = _$controller_;
    $httpBackend = _$httpBackend_;

    fixture.setBase('app/fixtures');
    var <%= moduleName %>data = fixture.load('<%= moduleName %>data.json');
    $httpBackend.when('GET', REST_ENDPOINT.<%= moduleName %>data).respond(<%= moduleName %>data);

    <%= moduleName %>Controller = $controller('<%= moduleName %>Controller');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have <%= moduleName %>data defined', () => {
    $httpBackend.flush();
    expect(<%= moduleName %>Controller.<%= moduleName %>Data).toBeDefined();
  });
});
