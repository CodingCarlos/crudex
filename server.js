

var project = require('pillars');
var config = require('./config.js');

var Generate = require('./generate.js');

// var routes = require('./routes/routes.js');

project.services.get('http').configure({
	port: config.port
}).start();


// Go through all routes, and create it.
//	TO_DO


// Crate main routes, the same to all projects
project.routes.add(
	new Route({
		id: 'Endpoint',
		path: '/endpoint',
		method: ['POST']
	},
	function(gw) {

		// console.log(gw.params);

		// console.log(typeof gw.params.type);
		// console.log(JSON.parse(gw.params.type));

		Generate.new(JSON.parse(gw.params.type), gw.params.endpoint, project);

		gw.html('done');

		// gw.html("<h1>Hello World!!</h1>");
	})
);
