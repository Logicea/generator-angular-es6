import 'angular';
import 'angular-mocks';

describe('The main controller', () => {

  beforeEach(angular.mock.module('<%= appName %>App'));

  let mainController, $httpBackend;

  beforeEach(inject((_$controller_, _$httpBackend_, REST_ENDPOINT) => {
    let $controller = _$controller_;
    $httpBackend = _$httpBackend_;

    fixture.setBase('app/fixtures');
    var somedata = fixture.load('somedata.json');
    $httpBackend.when('GET', REST_ENDPOINT.somedata).respond(somedata);

    mainController = $controller('mainController');
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have somedata defined', () => {
    $httpBackend.flush();
    expect(mainController.someData).toBeDefined();
  });
});
