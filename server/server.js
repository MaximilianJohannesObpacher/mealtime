/**
 * Created by MaximilianObpacher on 08.05.16.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/offerings');


// Creating offering model
var Offering = mongoose.model('Offering', {meal: String, chef: String, price: Number});

// Add offering to database
app.get("/", function (req, res) {
    Offering.find(function (err, offerings) {
        res.send(offerings);
    })
});

app.listen(3000);

// Catching Post Request for new Listing
app.post("/add", function (req, res){
    var meal = req.body.meal;
    var chef = req.body.chef;
    var price = req.body.price;
    var offering = new Offering({meal:meal, chef:chef, price:price});

    offering.save(function (err) {

        //Sending to app.js
        res.send();
    });

});
