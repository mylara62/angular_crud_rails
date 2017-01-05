postApp.controller("PostCtrl", ['$scope','$routeParams', 'Post', '$location', function($scope,$routeParams, Post, $location) {
	$scope.savePost = function(){
    Post.create({post: $scope.post},function(){
      $location.path('/');
    }, function(error) {
      console.log(error)
    });
  };
  $scope.post = Post.show({id: $routeParams.id})
  $scope.comments = Post.show_comments({id: $routeParams.id})
  $scope.posts = Post.query();
  $scope.updatePost = function(){
    Post.update({id: $scope.post.id},{post: $scope.post},function(){
      $location.path('/');
    }, function(error) {
      console.log(error)
    });
  };
  $scope.deletePost = function (postId) {
    if (confirm("Are you sure you want to delete this user?")){
      Post.delete({ id: postId }, function(){
        $scope.posts = Post.query();
        $location.path('/');
      });
    }
  };
  $scope.CommentForm = true;
  $scope.toggleCommentForm = function() {
    $scope.CommentForm = $scope.CommentForm === false ? true: false;
  };
  $scope.toggleReplyForm = function(index) {
    $scope[index] = true;
  };
  $scope.RemoveReplyForm = function(index) {
    $scope[index] = false;
  };
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.addItem = function () {
    $scope.products.push($scope.addMe);
  }
}]);




