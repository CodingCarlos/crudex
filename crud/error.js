
var Errors = {
	log: function(code, data) {
		error('log', code, data);
	},
	error: function(code, data) {
		error('error', code, data);
	},
	warn: function(code, data) {
		error('warn', code, data);
	}
};


function error(type, code, data) {
	
	var text = getText(code);

	switch(type) {
		case 'log':
			console.log(text);
			console.log(data);
			break;

		case 'error':
			console.error(text);
			console.error(data);
			break;

		case 'warn':
			console.warn(text);
			console.warn(data);
			break;
	}
}


function getText(code) {


	var errorCodes = {
		UndefinedType: 'Tryed to use an undefined type. First, define the type, creating new object of type Type, and then, add the desired object. The used type was:',
		Unknown: 'Unknown error. Code: ' + code + '. Data:'
	};

	return errorCodes[code] || errorCodes.Unknown;
}


module.exports = Errors;
