'use strict';
var server = require('./server/server.js');
server.listen(8080, function() {
	console.log('Listening on port 8080');	
});
