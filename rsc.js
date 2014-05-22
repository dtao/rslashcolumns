var rsc = angular.module('rsc', []);

rsc.controller('controller', function($scope, $http) {
  $scope.subreddit = 'news';
  $scope.listings = [];

  this.fetch = function() {
    $http.get('http://www.reddit.com/r/' + $scope.subreddit + '/hot.json')
      .success(function(result) {
        $scope.result = result;
        $scope.listings = result.data.children;
      });
  };
});
