var myApp2 = angular.module("myApp2", ['ngMessages']);

var index = 0;
var todos = [];

myApp2.controller('mainController2', ['$scope', '$interval',
function($scope, $interval) {
    $scope.todos = todos;
    
    $scope.add = function(newToDoContent) {
    	var newToDo = {completed: false, content: newToDoContent, createdAt: index};
      index += 1;
      $scope.todos.push(newToDo);
      $scope.newToDoContent = "";
    }
    
		$scope.remove = function(todo) {
    	var index = $scope.todos.indexOf(todo);
      $scope.todos.splice(index, 1);
    }
    
    $scope.reverse = function() {
    	$scope.todos = $scope.todos.reverse();
    }
}]);