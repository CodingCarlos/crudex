var Crud = require('./crud.js');


// Type user
var User = {
	name: 'User',
	id: 'id',
	data: {
		id: {
			type: 'Number',
			maxLenght: 128,
			minLenght: 1,
			mandatory: true,
			generator: false,
			unique: false
		},
		name: {
			type: 'String',
			maxLenght: 128,
			minLenght: 1,
			mandatory: true,
			generator: false,
			unique: true
		}
	}
};

var user = {
	name: 'Paco'
};

// Add type user.
Crud.add('Type', User, function(typeType) {

	console.log('Added type type');
	// console.log(typeType);

	Crud.add('User', user, function(addedUser) {

		console.log('Added user');
		console.log(addedUser);

		var updateUser = {
			id: addedUser.id,
			email: 'paco@fakemail.com'
		};

		Crud.put('User', updateUser, function(data) {
			console.log(data);
		});

	});

});
