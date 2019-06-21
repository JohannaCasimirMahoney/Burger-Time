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