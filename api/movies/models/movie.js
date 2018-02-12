const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    vote_count: Number,
    id: Number,
    video: Boolean,
    vote_average: Number,
    title: String,
    popularity: Number,
    poster_path: String,
    original_language: String,
    original_title: String,
    genre_ids: [],
    backdrop_path: String,
    adult: Boolean,
    overview: String,
    release_Date: String
});

module.exports = mongoose.model('Movie', schema);