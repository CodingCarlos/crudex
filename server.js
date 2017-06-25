

var project = require('pillars');
var config = require('./config.js');
// var routes = require('./routes/routes.js');

project.services.get('http').configure({
	port: config.port
}).start();


// Go through all routes, and create it.
//	TO_DO


// Crate main routes, the same to all projects
project.routes.add(
	new Route({
		id: 'Home',
		path: '/',
		method: ['get']
	},
	function(gw){
		gw.html("<h1>Hello World!!</h1>");
	})
);
