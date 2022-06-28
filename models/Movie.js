const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {

    })



const Movie = model('Movie', movieSchema);

module.exports = Movie;