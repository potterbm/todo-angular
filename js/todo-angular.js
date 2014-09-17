

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
		console.log(newItem);
		
		this.items.push({
			text : newItem.text,
			completed : false
		});
		
		newItem.text = '';
	}
}



var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoList', TodoList);