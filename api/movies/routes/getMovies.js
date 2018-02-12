module.exports = {
  method: 'GET',
  path: '/api/movies',
  handler: async (req, h) => {
    return {
      message: 'you are on your first route'
    };
  }
};

// module.exports = [
//     {
//         method: 'GET',
//         path:'/api/movies', 
//         handler: async (request, reply) => {
//             let movies = await Movie.find()
//             return movies;
//         }
//     }

// ];