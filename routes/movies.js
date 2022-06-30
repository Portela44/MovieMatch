const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");

// @desc    Displays movies view with one movie to vote
// @route   GET /movies
// @access  Public

router.get('/:movieId', async (req, res, next) => {
    const {movieId} = req.params;
    try {
        const movieFromDB = await Movie.findById(movieId)
        console.log(movieFromDB);
        res.render('movies/movies', {movieFromDB})
    } catch (error) {
        next(error)
    }
});

// @desc    Displays admin menu to create a movie.
// @route   GET /movies/create
// @access  Admin

router.get('/create', async (req, res, next) => {
    try {
        res.render('movies/new-movie')
    } catch (error) {
        next(error)
    }
});

// @desc    Posts a new-movie information to the db.
// @route   POST /movies/create
// @access  Admin

router.get('/create', async (req, res, next) => {
    // const {Things go in here} = req.body
    try {
        await Movie.create();
        
    } catch (error) {
        next(error)
    }
});



module.exports = router;