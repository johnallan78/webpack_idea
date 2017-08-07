//since we don't have a database we'll use our front end models at the moment
var express = require('express');

var films = require('../client/src/models/films')();
var film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var filmRouter = new express.Router(); 

filmRouter.get("/", function(req, res){
  res.json(films);
});

filmRouter.get("/:id", function(req, res){
  var index = req.params.id;
  res.json({data: films[index]});
});

filmRouter.post("/", function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

// adding an update route
filmRouter.put("/:id", function(req, res){
  films[req.params.id] = req.body.film;
  res.json(films);
});

filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});


module.exports =  filmRouter;