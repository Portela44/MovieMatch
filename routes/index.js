const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");
const isLoggedIn = require("../middlewares");
const Handlebars = require("hbs");

// IMDB API test requirement
const imdbId = require('imdb-id');
const metafilm = require("metafilm");
const colage = require('colage');
const User = require('../models/User');

// @desc    App home page
// @route   GET /
// @access  Public
router.get("/", async (req, res, next) => {
  const user = req.session.currentUser;
  try {
    let votedMovieIdArr = [];
    let votes = await Vote.find({ userId: user._id });

    votes.forEach(el => {
      votedMovieIdArr.push(String(el.movieId));
    });

    let nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    let nextMovie0 = nextMovie[0];

    while (votedMovieIdArr.includes(String(nextMovie0._id))) {

      if (await Movie.count() === votes.length) {
        res.redirect("/movies/congratulations");
        break;
      }
      nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
      nextMovie0 = nextMovie[0];
    }

    for (let i = 0; i < nextMovie0.genres.length; i++) {
      while (!user.preferences.includes(nextMovie0.genres[i])) {
        nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
        nextMovie0 = nextMovie[0];
      }
    }
    res.render("index", { user, nextMovie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
