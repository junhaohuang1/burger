
var orm = require("../config/orm.js");

var burger = {

  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(value, cb) {
    orm.insertOne("burgers", value, function(res) {
      cb(res);
    });
  },

  updateOne: function(value, valueToUpdate, cb) {
    orm.updateOne("burgers", value, valueToUpdate, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;