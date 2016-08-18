'use strict';

let express = require('express');
let app = express();
let Path = require('path');
let router = require('./router.js');


app.use('/static', express.static(Path.join(__dirname, '..', 'public')));



app.use('/', router);

exports = module.exports = app;
