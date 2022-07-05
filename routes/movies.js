const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");
const isLoggedIn = require("../middlewares")


// @desc    Displays a view where user can search for a specific movie
// @route   GET /search-movie
// @access  Public
router.get('/search-movie', (req, res, next) => {
    const user = req.session.currentUser
    res.render('movies/search-movie', { user })
})

// @desc    Displays a searched movie which can be consulted or voted.
// @route   GET /:searched-movie
// @access  Public

router.get('/searched-movie/', async (req, res, next) => {
    const { movieName } = req.query;
    try {
        const movieFromDB = await Movie.find({ name: movieName });
        res.render('movies/searchResults', movieFromDB[0])
    } catch (error) {
        next(error)
    }
});

// @desc    Deletes a movie.
// @route   POST /movies/:movieId/delete
// @access  Admin

router.post('/:movieId/delete', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        await Movie.findByIdAndDelete(movieId);
        res.redirect('/')
    } catch (error) {
        next(error)
    }
});

// @desc    Displays admin menu to edit a movie.
// @route   GET /movies/:movieId/edit
// @access  Admin

router.get('/:movieId/edit', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await Movie.findById(movieId);
        res.render("movies/edit-movie", movie);
    } catch (error) {
        next(error);
    }
});

// @desc    Updates an existing movie from db. 
// @route   POST /movies/:movieId/edit
// @access  Admin

router.post('/:movieId/edit', async (req, res, next) => {
    const { movieId } = req.params;
    const { imdb_id, name, year, image1, premiere, genre1, genre2, genre3, people1, people2, people3, imdb_rating, imdb_vote, poster1, overview } = req.body;
    const image = { og: image1 }
    const genres = [genre1, genre2, genre3];
    const people = [{ name: people1 }, { name: people2 }, { name: people3 }];
    const poster = { og: poster1 };
    const translations = [{ overview, poster }]
    try {
        await Movie.findByIdAndUpdate(movieId, { imdb_id, name, year, image, premiere, genres, people, imdb_rating, imdb_vote, translations }, { new: true });
        res.redirect(`/movies/${movieId}`);
    } catch (error) {
        next(error);
    }
});

// @desc    Displays admin menu to create a movie.
// @route   GET /movies/create
// @access  Admin

router.get('/create', (req, res, next) => {
    res.render('movies/new-movie')
});

// @desc    Updates db with an entirely new movie. Some items pending to fill in edit page.
// @route   POST /movies/create
// @access  Admin

router.post('/create', async (req, res, next) => {
    const { imdb_id, name, year, image1, premiere, genre1, genre2, genre3, people1, people2, people3, imdb_rating, imdb_vote, poster1, overview } = req.body;
    const image = { og: image1 }
    const genres = [genre1, genre2, genre3];
    const people = [{ name: people1 }, { name: people2 }, { name: people3 }];
    const poster = { og: poster1 };
    const translations = [{ overview, poster }]
    try {
        await Movie.create({ imdb_id, name, year, image, premiere, genres, people, imdb_rating, imdb_vote, translations });
        res.redirect("/");
    } catch (error) {
        next(error);
    }
});

// @desc    Shows user its voted list
// @route   GET /movies/myList
// @access  User


router.get('/myList', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser

    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId')
        res.render('movies/myList', { votes });
    } catch (error) {
        next(error)
    }
})

// @desc    Displays a random movie which can be consulted or voted.
// @route   GET /:movieId
// @access  Public

router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    const user = req.session.currentUser
    try {
        const movieFromDB = await Movie.findById(movieId)
        res.render('movies/movies', { movieFromDB, user })
    } catch (error) {
        next(error)
    }
});





module.exports = router;