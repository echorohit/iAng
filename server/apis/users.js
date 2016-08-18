'use strict';

let Faker = require('faker');

function generateUserInfo() {

	return {
		"name" : Faker.name.findName(),
		"email": Faker.internet.email(),
		"phone": Faker.phone.phoneNumber(),
		"city" : Faker.address.city(),
		"country": Faker.address.countryCode()
	}

}

let data = [];

function getUsers() {
	
	for (let i = 0; i < 100; ++i) {
		data.push(generateUserInfo());
	}

	return data;	
}

function getUser() {
	return generateUserInfo();
}


let User = {
	getUsers : getUsers,
	getUser  : getUser
};

exports = module.exports = User;

