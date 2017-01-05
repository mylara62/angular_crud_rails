postApp.controller("CommentCtrl", ['$scope','$routeParams', 'Comment', '$location', function($scope,$routeParams,Comment,$location) {
	$scope.saveComment = function(post){
	$scope.comment.post_id = post.id
    Comment.create({comment: $scope.comment},function(){
      $location.path('/posts/12/show');
    }, function(error) {
      console.log(error)
    });
  };
}]);




