
var DB = require('./' + config.database + '.js');

/* Exposed functions */

exports.get = DB.get;
exports.set = DB.set;

exports.dump = DB.dump;
