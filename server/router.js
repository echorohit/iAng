'use strict';
let express = require('express');
let Router = express.Router();
let Path = require('path');  
let User = require(Path.join(__dirname, 'models' , 'user'));



/**
	User this middleware for ACL, Security
*/
Router.use(function(req, res, next) {
	console.log(req.method);
	console.log(req.url);
	next();
});

//Router.use('/public', express.static(Path.join(__dirname, 'public')));



Router.get('/users', function(req, res) {
	res.json(User.getUsers());
});


Router.post('/user', function(req, res) {
	
	console.log(User);
	User.setDemo(true);
	res.json(User.addUser());
});

Router.get('/user', function(req, res) {

	res.json(User.getUser());
});

Router.get('/hello', function(req, res) {
	res.send('Hello! I am in Hello page');
});


exports = module.exports = Router;