'use strict';

let Mongoose = require('mongoose');

const mongoDBUrl = "mongodb://localhost/myapp";

let options = {
	db: { native_parser: true },
  	server: { poolSize: 5 },
  	replset: { rs_name: 'myReplicaSetName' },
  	promiseLibrary: require('bluebird')
};


Mongoose.connect(mongoDBUrl, options);
let db = Mongoose.connection;

function onError (err) {
	console.log(err.toString());
};

function onConnection() {
	assert.equal(Band.collection.findOne().constructor, require('bluebird'));
	console.log('connetion established successfully');
}

db.on('error', onError);

db.once('open', onConnection);

exports = module.exports = db;