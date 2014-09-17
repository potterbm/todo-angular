

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
	
	this.addItem = function(newItem) {
		this.items.push({
			text : newItem,
			completed : false
		});
		
		newItem.text = '';
	}
	
	this.removeItem = function(index) {
		this.items.splice(index, 1);
	}
}



var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoList', TodoList);