var express = require("express");
var router = new express.Router();

router.use("/films", require("./films.js"));


router.get("/", function(req, res){
  res.json({data: "Welcome"})
});

router.get("/about", function(req, res){
  res.json({data: "I HAZ A CINEMA"});
});

module.exports = router;


