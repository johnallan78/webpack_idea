var Film = function(options){
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
  this.genres = options.genres || [];
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  },

  addGenre: function(genre){
    this.genres.push(genre)
  }
}



module.exports = Film;