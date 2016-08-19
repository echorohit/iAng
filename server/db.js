'use strict';

let Mongoose = require('mongoose');
let Assert = require('assert');


const mongoDBUrl = "mongodb://localhost/myapp";

let options = {
	db: { native_parser: true },
  	server: { poolSize: 5 },
  	replset: { rs_name: 'myReplicaSetName' },
  	promiseLibrary: require('bluebird')
};

Mongoose.Promise = require('bluebird');

Mongoose.connect(mongoDBUrl, options);
let db = Mongoose.connection;

function onError (err) {
	console.log(err.toString());
	throw err;
};

function onConnection() {
	console.log('connetion established successfully');
}

db.on('error', onError);

db.once('open', onConnection);

exports = module.exports = db;