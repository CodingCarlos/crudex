// var Goblin = require('goblindb')();
var GDB = require('goblindb');
var Goblin = GDB();

Goblin.startStorage();
Goblin.updateConfig({file: './goblin_bd.json', recordChanges: true});


// console.log(Goblin.get('Type'));

/* Exposed functions */

exports.get = get;
exports.set = set;
exports.rem = rem;

exports.dump = dump;


/* Internal functions */

function get(type, id, callback) {

	// if(typeof Goblin.get(type) === 'undefined') {
	// 	Goblin.set({}, type);
	// }

	if(typeof callback === 'function') {
		callback(Goblin.get(type +'_'+ id));
	}
}

function set(type, id, data, callback) {

	// console.log(type);
	// console.log(id);
	// console.log(data);
	// console.log(callback);

	// if(typeof Goblin.get('type_' + type) === 'undefined') {
	// 	Goblin.set({}, 'type_'type);
	// }

	Goblin.set(data, type +'_'+ id);

	// db[type][id] = data;

	if(typeof callback === 'function') {
		callback(Goblin.get(type +'_'+ id));
	}
}

function rem(type, id, callback) {
	// Goblin.delete(type[id]);
	console.log('REMOVEEEEEEEEE');
	// delete db[type][id];
}

function dump(callback) {
	if (typeof callback === 'function') {
		callback(Goblin.get());
	} else {
		console.log(Goblin.get());
	}
}
