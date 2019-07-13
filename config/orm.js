// Connection, and functions that takes in the commands to SQL.
var connection = require("./connection.js");

// This helper the function for SQL syntax

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Hellper function to convert object key/vaule pairs to SQL syntax

function objToSql(ob) {
    var arr = [];
// loop through the keys and push the key/value as a string int arr

    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

// Object for all SQL statement functions.

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

      // Create burger
      create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    // Update burger
    update: function(table, obJColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(obJColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err,result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },
// Delete burger
delete: function(table, condition, cb) {
    var queryString = "DELETE FROM" + table;
        
        queryString += "WHERE";
        queryString += condition;
        
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
}

};

module.exports = orm;
