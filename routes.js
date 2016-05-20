/**
 * Created by MaximilianObpacher on 20.05.16.
 */

// grab the meal model we just created
var Meal = require('./models/meal');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/meals', function(req, res) {
        // use mongoose to get all meals in the database
        Meal.find(function(err, meals) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(meals); // return all meals in JSON format
        });
    });


    // route to handle all angular requests
    app.get("/", function (req, res) {
        Meal.find(function (err, meals) {
            res.send(meals);
        })
    });

    // Catching Post Request for new Listing
    app.post("/add", function (req, res){
        var meal = req.body.meal;
        var chef = req.body.chef;
        var price = req.body.price;
        var offering = new Meal({meal:meal, chef:chef, price:price});

        offering.save(function (err) {
            //Sending to app.js
            res.send();
        });
        });
    
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};