var fixtures = require('../fixtures/posts');

describe('PostsController', function() {
  var PostsController, scope, httpBackend;

  beforeEach(angular.mock.module('simple-app'));

  beforeEach(angular.mock.inject(
    function($rootScope, $controller, _posts_, $httpBackend) {
      scope = $rootScope.$new();

      PostsController = function() {
        return $controller('PostsController', {
          $scope: scope,
          posts: _posts_
        });

      httpBackend = $httpBackend;
    };
  }));

  it('should set the posts on the scope', function() {
    debugger;
    httpBackend.whenGET('/posts').respond(fixtures);

    var controller = PostsController();
    expect(scope.posts).toEqual(fixtures);
  });
});
