
var config = require('../config.js');
var DB = require('./' + config.database + '.js');

/* Exposed functions */

exports.get = DB.get;
exports.set = DB.set;
exports.rem = DB.rem;

exports.dump = DB.dump;
