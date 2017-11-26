var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(
    {
      burger_name: req.body.name,
      devoured: 0
    }
    , function() {
    res.redirect("/");
  });

});

router.put("/:id", function(req, res) {
  burger.updateOne(
  {
    devoured: req.body.devoured
  },
  {
    id: req.params.id
  }, function() {
    res.redirect("/");
  });
});


//exporting to server.js
module.exports = router;
