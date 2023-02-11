const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");
const User = require('../models/User');
const isLoggedIn = require("../middlewares");
const Handlebars = require("hbs");

// IMDB API test requirement
const imdbId = require('imdb-id');
const metafilm = require("metafilm");
const colage = require('colage');


//Handlebar helpers
Handlebars.registerHelper('contains', function (arr, genre) {
    let contained = false;
    if (arr.includes(genre)) {
        contained = true;
    }
    return contained
});

// @desc    Shows all movies ignored by the user
// @route   GET /ignored
// @access  Public
router.get('/ignored', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId')
        res.render('movies/ignored', { votes, user });
    } catch (error) {
        next(error);
    }
});

// @desc    Displays view for the user to filter all voted movies by genre.
// @route   GET /filter
// @access  Public
router.get('/filter', isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser
    res.render('movies/filter', { user })
});

// @desc    Displays a view if the user has voted all movies.
// @route   GET /congratulations
// @access  Public
router.get('/congratulations', (req, res, next) => {
    const user = req.session.currentUser
    res.render('movies/congratulations', { user })
});

// @desc    Displays a view where user can search for a specific movie
// @route   GET /search-movie
// @access  Public
router.get('/search-movie', isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser
    res.render('movies/search-movie', { user })
});

// @desc    Shows in the console and screen a movie's json information coming from api, so it can easily get pasted on seed (searching by name).
// @route   GET /:api-search
// @access  Admin
router.get('/api-search-by-name', async (req, res, next) => {
    const { movieName } = req.query;
    try {
        const movieImdbId = await imdbId(`${movieName}`);
        const movieInfo = await metafilm.id({ imdb_id: `${movieImdbId}` });
        res.json(movieInfo);
    } catch (error) {
        next(error);
    }
});

// @desc    Shows in the console a movie's json information coming from api, so it can easily get pasted on seed (searching by imdb_id).
// @route   GET /:api-search
// @access  Admin
router.get('/api-search-by-imdbId', async (req, res, next) => {
    const { movieIMDBId } = req.query;
    try {
        const movieInfo = await metafilm.id({ imdb_id: `${movieIMDBId}` });
        res.json(movieInfo);
    } catch (error) {
        next(error);
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
    const user = req.session.currentUser;
    res.render('movies/new-movie', { user });
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
        res.render('movies/myList', { votes, user });
    } catch (error) {
        next(error)
    }
});

// @desc    Displays a new window, with movies sorted by release date
// @route   GET /myList/byDate
// @access  Public
router.get('/myList/byDate', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId');
        votes.sort((a, b) => {
            return b.movieId.premiere - a.movieId.premiere;
        });
        res.render('movies/myList', { votes, user });
    } catch (error) {
        next(error)
    }
});

// @desc    Displays a new window, with movies sorted by number of votes in imdb
// @route   GET /myList/byPopularity
// @access  Public
router.get('/myList/byPopularity', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId');
        votes.sort((a, b) => {
            return b.movieId.imdb_vote - a.movieId.imdb_vote;
        });
        res.render('movies/myList', { votes, user });
    } catch (error) {
        next(error)
    }
});

// @desc    Displays a new window, with movies sorted by imdb rating
// @route   GET /myList/byRating
// @access  Public
router.get('/myList/byRating', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId');
        votes.sort((a, b) => {
            return b.movieId.imdb_rating - a.movieId.imdb_rating;
        });
        res.render('movies/myList', { votes, user });
    } catch (error) {
        next(error)
    }
});

// @desc    Displays a new window, with movies sorted by genre
// @route   GET /myList/byGenre
// @access  Public
router.get('/myList/byGenre', isLoggedIn, async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const votes = await Vote.find({ userId: user._id }).populate('movieId');
        votes.sort((a, b) => {
            return b.movieId.imdb_rating - a.movieId.imdb_rating;
        });
        res.render('movies/myListByGenres', { votes, user });
    } catch (error) {
        next(error)
    }
});

// @desc    Allows the user to update its own filters to get personalized recommendations.
// @route   POST /filter
// @access  User
router.post("/filter", isLoggedIn, async (req,res,next) => {
    const {action, drama, fantasy, comedy, mystery, adventure, war, scifi, romance, history, documentary, crime} = req.body;
    const user = req.session.currentUser;
    const newPreferences = [];
    if(req.body.action === "on") {
        newPreferences.push("1");
    };
    if(req.body.drama === "on") {
        newPreferences.push("12");
    };
    if(req.body.fantasy === "on") {
        newPreferences.push("14");
    };
    if(req.body.comedy === "on") {
        newPreferences.push("8");
    };
    if(req.body.mystery === "on") {
        newPreferences.push("22");
    };
    if(req.body.adventure === "on") {
        newPreferences.push("3");
    };
    if(req.body.war === "on") {
        newPreferences.push("34");
    };
    if(req.body.scifi === "on") {
        newPreferences.push("27");
    };
    if(req.body.romance === "on") {
        newPreferences.push("26");
    };
    if(req.body.history === "on") {
        newPreferences.push("20");
    };
    if(req.body.documentary === "on") {
        newPreferences.push("11");
    };
    if(req.body.crime === "on") {
        newPreferences.push("10");
    };

    try {
        const newUser = await User.findByIdAndUpdate(user._id, {preferences: newPreferences}, {new: true});
        req.session.currentUser = newUser;
        res.redirect("/");
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
        if(user) {
            let votes = await Vote.find({ userId: user._id });
        if (await Movie.count() === votes.length) {
            res.redirect("/movies/congratulations");
        } else {
            const movieFromDB = await Movie.findById(movieId);
            res.render('movies/movies', { movieFromDB, user })
        }
        } else {
            const movieFromDB = await Movie.findById(movieId);
            res.render('movies/movies', { movieFromDB })
        } 
    } catch (error) {
        next(error)
    }
});

module.exports = router;