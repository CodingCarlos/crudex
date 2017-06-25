
// Generate the CRUD generator 

// var DB = require('../store/goblin.js');
var DB = require('../store/db.js');

/* Exports */
exports.get = get;
exports.set = set;	/* Is this neccessary? While I can create it directly from the CRUD... Idk. */


/* Generate the Type type*/ 

/** The "Type" type. 
 *	All the types generated shall follow this pattern
 */
var type = {
	name: 'Type',
	id: 'name',
	data: {
		name: {
			type: 'String',
			maxLenght: 128,
			minLenght: 1,
			mandatory: true,
			generator: false,
			unique: true
		},
		id: {
			type: 'String',
			maxLenght: 128,
			minLenght: 1,
			mandatory: true,
			generator: false,
			unique: false
		},
		data: {
			type: 'Object',
			maxLenght: 0,
			minLenght: 0,
			mandatory: true,
			generator: false,
			unique: false
		}
	}
};

set('Type', type);


/* Internal functions */

function set (name, data, callback) {
	DB.set('Type', name, data, callback);
}

function get (name, callback) {
	DB.get('Type', name, callback);
}

