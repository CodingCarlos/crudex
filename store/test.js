
/* Just a Test DB. This is not production ready, hehe */
var db = {};


/* Exposed functions */

exports.get = get;
exports.list = list;
exports.set = set;
exports.rem = rem;

exports.getTypes = getTypes;

exports.dump = dump;


/* Internal functions */

function get(type, id, callback) {

	if(typeof db[type] === 'undefined') {
		db[type] = {};
	}

	if(typeof callback === 'function') {
		callback(db[type][id]);
	}
}

function list(type, callback) {

	if(typeof db[type] === 'undefined') {
		db[type] = {};
	}

	var res = [];

	for(var each in db[type]) {
		res.push(db[type][each]);
	}

	if(typeof callback === 'function') {
		callback(each);
	}
}


function set(type, id, data, callback) {

	if(typeof db[type] === 'undefined') {
		db[type] = {};
	}

	db[type][id] = data;

	if(typeof callback === 'function') {
		callback(db[type][id]);
	}
}

function rem(type, id, callback) {
	delete db[type][id];
}


function getTypes(callback) {

	var res = [];

	if(typeof db.Type === 'undefined') {
		db.Type = {};
	}

	for(var each in db.Type) {
		res.push(db.Type[each]);
	}

	callback(res);
}


function dump(callback) {
	if (typeof callback === 'function') {
		callback(db);
	} else {
		console.log(db);
	}
}
