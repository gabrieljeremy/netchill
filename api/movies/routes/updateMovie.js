const Movie = require('../models/movie.js');

module.exports = {
  method: 'PUT',
  path: '/api/movies/{id}',
  handler: async (req, h) => {
    console.log(req.payload);
    // return Movie.findByIdAndUpdate(
    //     req.params.id, 
    //     { $set : req.payload },
    //     { new: true }
    // );
    return Movie.findOneAndUpdate(
        { id : req.params.id }, 
        { $set : req.payload },
        { new: true } // renvoie le nouvel objet dernièrement créé
    );
  }
};