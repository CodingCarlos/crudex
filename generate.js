
var Crud = require('./crud/crud.js');


exports.new = add;


function add(type, endpoint, project) {
	
	// Add type to crud
	Crud.add('Type', type, function(typeData) {

		// Add endpoints to api
		project.routes.add(
			new Route({
				id: type + 'Get',
				path: '/' + endpoint + '/:id',
				method: ['GET']
			},
			function(gw) {
				Crud.get(type.name, gw.params.id, function(data) {
					response(gw, data);
				});
			})
		);

		project.routes.add(
			new Route({
				id: type + 'Get',
				path: '/' + endpoint,
				method: ['GET']
			},
			function(gw) {
				Crud.list(type.name, function(data) {
					response(gw, data);
				});
			})
		);

		project.routes.add(
			new Route({
				id: type + 'Post',
				path: '/' + endpoint,
				method: ['POST']
			},
			function(gw) {
				Crud.add(type.name, gw.params, function(data) {
					response(gw, data);
				});
			})
		);

		project.routes.add(
			new Route({
				id: type + 'Put',
				path: '/' + endpoint + '/:id',
				method: ['PUT']
			},
			function(gw) {
				Crud.put(type.name, gw.params, function(data) {
					response(gw, data);
				});
			})
		);

		project.routes.add(
			new Route({
				id: type + 'Put',
				path: '/' + endpoint + '/:id',
				method: ['DELETE']
			},
			function(gw) {
				Crud.rem(type.name, gw.params.id, function(data) {
					response(gw, data);
				});
			})
		);

	});
}

function response(gw, data) {

	console.log(data);

	gw.send(data);
	// gw.send('ok');
}
