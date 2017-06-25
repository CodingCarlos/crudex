
var ERROR = require('./error.js');
var DB = require('./store/db.js');
var Type = require('./type.js');


/* Exposed functions */

exports.get = get;
exports.add = add;
exports.put = update;
exports.rem = rem;


/* Internal functions */

function get(type, id, callback) {
	DB.get(type, id, callback);
}

function add(type, data, callback) {
	
	clean(type, data, function(id, data, typeData) {
		DB.set(type, id, data, callback);
		// DB.dump();
	});
}

function update(type, data, callback) {
	
	clean(type, data, function(id, data, typeData) {
		get(type, id, function(actualData) {
			
			data = merge(data, actualData, typeData);
			DB.set(type, id, data, callback);
			// DB.set(type, id, merge(data, actualData, typeData), callback);

		});
	});
}

function rem(type, id, callback) {
	DB.rem(type, id, callback);
}


/* This is on type, I think... */

function clean(type, data, callback) {

	Type.get(type, function(typeData) {

		if(typeof typeData === 'undefined' || typeData === 'undefined' || !typeData) {
			callback(ERROR.warn('UndefinedType', type));
			return false;
		}

		/*
			For each data param, check if type is valid, and so on...
		*/

		if(typeof data[typeData.id] === 'undefined') {
			data[typeData.id] = generateId(typeData);
		}
		// var id = data[typeData.id];
		
		//
		callback(data[typeData.id], data, typeData);

	});
}

function merge(a, b, typeData) {

	for(var k in b) {
		a[k] = b[k];
	}

	return a;
}

function generateId(typeData) {

	// DEPENDING OF EACH TYPE CREATE SOME SPECIFIC

	var max = 10,
		min = 5;

	return Math.floor(Math.random() * (max-min) + min);
}
