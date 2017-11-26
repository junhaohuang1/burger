var connection = require("../config/connection.js");

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },

    insertOne: function(table, value, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, value], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    updateOne: function(table, value, valueToUpdate, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, value, valueToUpdate], function(err, res) {
            if (err) throw err;
            cb(res);;
        });
    }

};

module.exports = orm;