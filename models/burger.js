// Import the ORM to create functions into burger.js
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Adding new burger
    insertOne: function(cols, val, cb) {
        orm.insertOne("burgers",cols, vals, function(res) {
            cb(res);
        });
    },
    // Updates and change devoured statu
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals,condition, function(res) {
            cb(res);
        });
    },
};

// Export at the end of burger.js file.
module.exports = burger;