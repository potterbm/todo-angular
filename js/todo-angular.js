

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
	this.items = [];
	
	this.addItem = function(newItem) {
		this.items.push(new TodoItem(newItem));
		
		newItem = '';
		
		this.save();
	}
	
	this.removeItem = function(index) {
		this.items.splice(index, 1);
		
		this.save();
	}
	
	this.initStorage = function() {
		try {
			this.storage = window.localStorage;
		} catch(e) {
			this.storage = false;
		}
	}
	this.initStorage();
	
	
	this.load = function() {
		if(this.storage === false) {
			return;
		}
		
		var data = this.storage.getItem("ng-list");
		
		if(data && typeof(data) != "undefined") {
			this.items = $.map(JSON.parse(data), function(item) { return new TodoItem(item); });
		}
	}
	this.load();
	
	
	this.save = function() {
		if(this.storage === false) {
			return;
		}
		
		this.storage.setItem(JSON.stringify(this.items));
	}
}



var todoApp = angular.module('todoApp', []);

todoApp.controller('TodoList', TodoList);