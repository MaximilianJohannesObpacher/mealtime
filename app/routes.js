/**
 * Created by MaximilianObpacher on 20.05.16.
 */

var Meal = require('./models/meal');
var cors = require('cors');

module.exports = function(app) {

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

    app.post("/api/meals", function (req, res){
        var meal = req.body.meal;
        var chef = req.body.chef;
        var price = req.body.price;
        var offering = new Meal({meal: meal, chef: chef, price:price});
        offering.save(function (err){
            if(err){
                console.log("fail");
            }
            else{
                console.log("success!");
            }
        });
    });

    // server routes
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};