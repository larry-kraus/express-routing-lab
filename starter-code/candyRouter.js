var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];

//console.log(candies[1]);

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

// Fill out the rest of the routes here
router.get('/:id', function(req, res) {
	//res.json("SHOW me the money");
	var index = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (candies[i].id == index) {
			res.json(candies[i]);
		}
	}
});

router.post('/', function(req, res) {
	candies.push(req.body);
	res.send(req.body);
});

router.put('/:id', function(req, res) {
	var index = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (candies[i].id == index) {
			candies[i].name = req.body.name;
			candies[i].color = req.body.color;
			res.json(candies[i]);
		}
	}
	res.json(candies);
});

router.delete('/:id', function(req, res) {
	var index = req.params.id;
	for (var i = 0; i < candies.length; i++) {
		if (candies[i].id == index) {
			res.json(candies.splice(i, 1));
		}
	}
	res.json(candies);
});

module.exports = router;