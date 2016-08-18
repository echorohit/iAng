'use strict';
let Path = require('path');

let dbModulePath = Path.join(__dirname, '..', 'db');
let db = require(dbModulePath);
let Mongoose = require('mongoose');

Mongoose.promise = require('bluebird');

let Faker = require('faker');

let demoMode = false;

let User = function User() {};


let UserSchema = Mongoose.Schema({
	name : String,
	email: String,
	phone: String,
	city: String,
	country: String
});

let UserModel = Mongoose.model('User', UserSchema);

/**
 * @param {[type]}
 */
User.prototype.addUser = function(user) {
	
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

	console.log(newUser);


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
User.prototype.deleteUser = function(id) {
	//noop
	//Will do it later
}

User.prototype.editUser = function(id) {
	//noop
	//Will do it later
}

User.prototype.setDemo = function(demoBool) {
	demoMode = !!demoBool;
}



exports = module.exports =  User;
