/**
 * Created by MaximilianObpacher on 08.05.16.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var db = require('./config/db.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes.js')(app); // configure our routes

mongoose.connect(db.url);

app.listen(3000);

exports = module.exports = app;
