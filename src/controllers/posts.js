module.exports = ['$scope', 'posts', function($scope, posts) {
  posts.refresh(function(err, data) {
    $scope.posts = data;
  });
}]
