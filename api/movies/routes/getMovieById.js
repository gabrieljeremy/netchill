const Movie = require('../models/movie.js');

module.exports = {
  method: 'GET',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    let movie = await Movie.find({id:req.params.id})
    try {
        return movie;
    } catch (err) {
      console.error(err);
    }
  }
};