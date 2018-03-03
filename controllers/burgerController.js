var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data);
		var hbsObject = {burgers: data};
		console.log("hbs" + hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.name, req.body.devoured
		], function(result) {
			console.log("post:" + result);
			res.json({id: result.insertId});
	});

});


router.put("/api/burgers/:id", function(req, res) {
	var condition = "id= " + req.params.id;
	console.log("put condition: " + condition);
	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;
