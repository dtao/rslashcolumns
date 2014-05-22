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

  this.getComments = function(listing) {
    $http.get('http://www.reddit.com/r/' + $scope.subreddit + '/comments/' + listing.data.id + '.json')
      .success(function(result) {
        $scope.comments = result[1].data.children;
      });
  };
});
