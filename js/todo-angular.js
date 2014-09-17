

function TodoList() {
	this.items = [
		{
			text : "First thing",
			completed : false
		},
		{
			text : "Second thing",
			completed : true
		},
		{
			text : "Another thing",
			completed : false
		}
	];
	
	this.addItem = function() {
		$scope.items.push({
			text : $scope.newItem.text,
			completed : false
		});
		
		$scope.newItem.text = '';
	}
}



var todoApp = angular.module('todoApp', ['ngRoute']);

todoApp.controller('TodoList', TodoList);