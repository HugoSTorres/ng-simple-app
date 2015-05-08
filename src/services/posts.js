module.exports = ['$http', function($http) {
  this.refresh = function(callback) {
    $http.get('/posts')
      .success(function(data, status, headers, config) {
        callback(null, data);
      })
      .error(function(data, status, headers, config) {
      });
  };
}]
