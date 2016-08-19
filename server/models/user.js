'use strict';
let Path = require('path');
let dbModulePath = Path.join(__dirname, '..', 'db');
let db = require(dbModulePath);
let Mongoose = require('mongoose');
let Faker = require('faker');
let autoIncrement = require('mongoose-auto-increment');

let demoMode = false;

const internals  = {};


exports = module.exports = internals.User = function User() {};

//Adding Auto increment field
autoIncrement.initialize(db);

let UserSchema = Mongoose.Schema({
	name : String,
	email: String,
	phone: String,
	city: String,
	country: String
});


UserSchema.plugin(autoIncrement.plugin, {
	model : 'User',
	field : 'userId',
	startAt: 1,
	incrementBy : 1
});
	
let UserModel = Mongoose.model('User', UserSchema);

/**
 * @param {[type]}
 */

internals.User.prototype.addUser = function(user) {
	
	if(demoMode) {
		user = {
			"name" : Faker.name.findName(),
			"email": Faker.internet.email(),
			"phone": Faker.phone.phoneNumber(),
			"city" : Faker.address.city(),
			"country": Faker.address.countryCode()
		};	
	}
	var newUser = new UserModel(user);


	return newUser.save()
		   .then( (user) => {
		   		return user;
		   })
		   .error( (err) => {
		   		console.log(err.toString());
		   })
		   .catch( (err) => {
		   		throw(err);
		   });
}
/**
 * @param  {[type]}
 * @return {[type]}
 */
internals.User.prototype.deleteUser = function(id) {
	//noop
	//Will do it later
}

/**
 * [editUser description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
internals.User.prototype.editUser = function(id) {
	//noop
	//Will do it later
}

/**
 * [setDemo description]
 * @param {[type]} demoBool [description]
 */
internals.User.prototype.setDemo = function(demoBool) {
	demoMode = !!demoBool;
}



