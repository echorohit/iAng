'use strict';
var Path = require('path');

var dbModulePath = Path.join(__dirname, '..', 'db');
let db = require(dbModulePath);
let Mongoose = require('mongoose');

let UserSchema = Mongoose.Schema({
	name : String,
	address: String,

})

let User = Mongoose.model('User', UserSchema);

var m = new User({
	name : 'Rohit',
	address: "D116A, Laxminagar"
});

m.save(function(err, m) {
	if(err) {
		return console.log(err.toString());
	}
	console.log(m);
})


