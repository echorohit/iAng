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


/**
 * [description]
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.json(User.getUsers());} [description]
 * @return {[type]}      [description]
 */
Router.get('/users', function(req, res) {
	res.json(User.getUsers());
});


/**
 * [description]
 * @param  {[type]}   req  [description]
 * @param  {Function} res) {	let        user [description]
 * @return {[type]}        [description]
 */
Router.post('/user', function(req, res) {

	let user = new User();		
	console.log(User);
	user.setDemo(true);
	return user.addUser()
		.then((userInfo) => {
			return res.json(userInfo);
		});
});

/**
 * [description]
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.json(User.getUser());} [description]
 * @return {[type]}      [description]
 */
Router.get('/user', function(req, res) {

	res.json(User.getUser());
});

/**
 * [description]
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	res.send('Hello! I am in Hello page');} [description]
 * @return {[type]}      [description]
 */
Router.get('/hello', function(req, res) {
	res.send('Hello! I am in Hello page');
});


exports = module.exports = Router;