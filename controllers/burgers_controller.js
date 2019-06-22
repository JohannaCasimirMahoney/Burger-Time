// Dependencies
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes at the end of the file

router.get("/", function(req, res) {
    burger.selectAll(function (req, res) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// This creates a new burger to the db

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(results) {
        res,json({ id: results.insertId });
    });
});

router.put("/api/burger/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
// Setting the condition if the change is not made to 404 display
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

// This will delete the burger from the db.

router.delete("/api/burgers/:id", function(req,res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    // If no rows were changed, then the ID must not exist, so 404
    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();

        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;