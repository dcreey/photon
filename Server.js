/**
 * Created by dcreey on 12/15/2015.
 */
var express = require("express");

var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

var db = require('./config/db');
var photon = require('./config/photon');
var port = process.env.PORT || 3001;

var path = require('path');

global.appRoot = path.resolve(__dirname);
global.photon = photon;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./server/routes')(app);

mongoose.connect(db.url);

app.listen(port);

exports = module.exports = app;