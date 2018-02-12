const Movie = require('../models/movie.js');

module.exports = {
  method: 'GET',
  path: '/api/movies',
  handler: async (req, h) => {
    let movies = await Movie.find();
    return movies;
  }
};