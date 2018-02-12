const Movie = require('../models/movie.js');

module.exports = {
  method: 'DELETE',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    await Movie.findOneAndRemove({ id : req.params.id });
    return 'movie deleted';
  }
};