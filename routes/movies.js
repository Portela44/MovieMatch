const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Movie = require("../models/Movie");

// @desc    Displays movies view with one movie to vote
// @route   GET /movies
// @access  Public

router.get('/', async (req, res, next) => {
    try {
        const movieFromDB = await Movie.aggregate([{ $sample: { size: 1 } }])
        console.log(movieFromDB)
        res.render('movies/movies', { movieFromDB })
    } catch (error) {
        next(error)
    }
})

module.exports = router;