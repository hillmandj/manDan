var myApp = {
	bootUp : function(options) {
	},
	login : function(options, user_name, password) {

	}
}

function myApp(options) {
	this.options = options;
	this.bootUp();
}

myApp.prototype.bootUp = function() {
	console.log(this.options)
}

myApp.prototype.login = function(username, password) {
	console.log(this.options)
	return this;
}

myApp.prototype = {
	login : function(username, password) {
		console.log(this.options)
		return this;
	},
	bootUp : function() {

	}
};

var my_app = new myApp();
my_app.login("tony", "password123");

var my_app = myApp('tony', "password123").login()

