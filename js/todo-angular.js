var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoListController', function($scope) {
	$scope.items = [
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
});