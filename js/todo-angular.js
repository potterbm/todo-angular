

function TodoItem(text, completed) {
	
	if(typeof(text) == "object") {
		var object = $.extend({ text : "", completed : false }, text);
		
		this.text = object.text;
		this.completed = !!object.completed;
	}
	
	else {
		this.text = text;
		this.completed = !!completed;
	}
	
	this.toggleCompleted = function() {
		this.completed = !this.completed;
	}
}


function TodoList() {
	this.items = [ new TodoItem("First thing", false), new TodoItem("Second thing", true), new TodoItem("Another thing") ];
	
	this.addItem = function(newItem) {
		this.items.push(new TodoItem(newItem));
		
		newItem = '';
	}
	
	this.removeItem = function(index) {
		this.items.splice(index, 1);
	}
	
	this.load = function() {
		
	}
	
	this.save = function() {
		
	}
}



var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoList', TodoList);