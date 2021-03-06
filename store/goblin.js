// var Goblin = require('goblindb')();
var GDB = require('goblindb');
var Goblin = GDB();

Goblin.startStorage();
Goblin.updateConfig({file: './goblin_bd.json', recordChanges: true});


// console.log(Goblin.get('Type'));

/* Exposed functions */

exports.get = get;
exports.list = list;
exports.set = set;
exports.rem = rem;

exports.getTypes = getTypes;

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

function list(type, callback) {

	// if(typeof Goblin.get(type) === 'undefined') {
	// 	Goblin.set({}, type);
	// }

	var res = [];
	var all = Goblin.get();

	for(var each in all) {
		if(each.indexOf(type + '_') > -1) {
			res.push(all[each]);
		}
	}

	if(typeof callback === 'function') {
		callback(res);
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


function getTypes(callback) {
	var all = Goblin.get();

	var res = [];

	for(var each in all) {
		if(each.indexOf('Type_') > -1) {
			res.push(all[each]);
		}
	}

	// console.log(res);

	callback(res);
}


function dump(callback) {
	if (typeof callback === 'function') {
		callback(Goblin.get());
	} else {
		console.log(Goblin.get());
	}
}
