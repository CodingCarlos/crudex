
var config = require('../config.js');
var DB = require('./' + config.database + '.js');

/* Exposed functions */

exports.get = DB.get;
exports.list = DB.list;
exports.set = DB.set;
exports.rem = DB.rem;

exports.getTypes = DB.getTypes;

exports.dump = DB.dump;
