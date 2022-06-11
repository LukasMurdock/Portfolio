var myApp2 = angular.module("ToDoList", ['ngMessages']);

var index = 0;
var todos = [];

myApp2.controller('ToDoListController', ['$scope', '$interval',
function($scope, $interval) {
    $scope.toDoListName = "Dynamic To-Do List";
    $scope.todos = todos;

    $scope.allButton = {
      'background-color': 'green'
    };


    $scope.oFirst = {
      'background-color': 'green'
    };
    
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


    $scope.allPressed = function(x) {
      x.allButton = {
        'background-color': 'green'
      };
      x.ucButton = {
        'background-color': 'none'
      };
      x.cButton = {
        'background-color': 'none'
      };
    }

    $scope.ucPressed = function(x) {
      x.allButton = {
        'background-color': 'none'
      };
      x.ucButton = {
        'background-color': 'green'
      };
      x.cButton = {
        'background-color': 'none'
      };
    }

    $scope.cPressed = function(x) {
      x.allButton = {
        'background-color': 'none'
      };
      x.ucButton = {
        'background-color': 'none'
      };
      x.cButton = {
        'background-color': 'green'
      };
    }

    $scope.oFirstPressed = function(x) {
      x.oFirst = {
        'background-color': 'green'
      };
      x.nFirst = {
        'background-color': 'none'
      };
      x.alphab = {
        'background-color': 'none'
      };
      x.rAlphab = {
        'background-color': 'none'
      };
    }

    $scope.nFirstPressed = function(x) {
      x.oFirst = {
        'background-color': 'none'
      };
      x.nFirst = {
        'background-color': 'green'
      };
      x.alphab = {
        'background-color': 'none'
      };
      x.rAlphab = {
        'background-color': 'none'
      };
    }

    $scope.alphabPressed = function(x) {
      x.oFirst = {
        'background-color': 'none'
      };
      x.nFirst = {
        'background-color': 'none'
      };
      x.alphab = {
        'background-color': 'green'
      };
      x.rAlphab = {
        'background-color': 'none'
      };
    }

    $scope.rAlphabPressed = function(x) {
      x.oFirst = {
        'background-color': 'none'
      };
      x.nFirst = {
        'background-color': 'none'
      };
      x.alphab = {
        'background-color': 'none'
      };
      x.rAlphab = {
        'background-color': 'green'
      };
    }

}]);