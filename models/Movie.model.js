const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String
  },
  director: {
    type: String
  },
  stars: {
    type: [ String ]
  },
  image: {
    type: String 
  },
  description: {
    type: String 
  },
  showtimes: {
    type: [ String ]
  },
});

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;