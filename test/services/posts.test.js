var fixtures = require('../fixtures/posts');

describe('postsService', function() {
  var postsService, httpBackend;

  beforeEach(angular.mock.module('simple-app'));

  beforeEach(angular.mock.inject(function(_posts_, $httpBackend) {
    postsService = _posts_;
    httpBackend = $httpBackend;
  }));

  it('should get the data', function() {
    httpBackend.whenGET('/posts').respond(fixtures);

    postsService.refresh(function(err, data) {
      expect(data).toEqual(fixtures);
    });

    httpBackend.flush();
  });
});
