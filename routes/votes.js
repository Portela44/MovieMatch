const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");
const isLoggedIn = require("../middlewares");

// @desc    Gets movie-detail view again and loads a new random item
// @route   GET /votes/:movieId/voteLike
// @access  Public

router.get("/:movieId/voteLike", isLoggedIn, (req, res, next) => {
    res.redirect("/");
});

// @desc    Posts vote to our database (like)
// @route   POST /votes/:movieId/voteLike
// @access  Public

router.post("/:movieId/voteLike", isLoggedIn, async (req, res, next) => {
    const vote = true;
    const { movieId } = req.params;
    const userId = req.session.currentUser._id;
    try {
        await Vote.create({ userId, movieId, vote });
        const nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
        const nextMovie0 = nextMovie[0]
        res.redirect(`/movies/${nextMovie0._id}`)
    } catch (error) {
        next(error);
    }
});

// @desc    Gets movie-detail view again and loads a new random item
// @route   GET /votes/:movieId/voteDislike
// @access  Public

router.get("/:movieId/voteDislike", isLoggedIn, (req, res, next) => {
    res.redirect("/");
});

// @desc    Posts vote to our database (dislike)
// @route   POST /votes/:movieId/voteDislike
// @access  Public

router.post("/:movieId/voteDislike", isLoggedIn, async (req, res, next) => {
    const vote = false;
    const { movieId } = req.params;
    const userId = req.session.currentUser._id;
    try {
        await Vote.create({ userId, movieId, vote });
        const nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
        const nextMovie0 = nextMovie[0]
        //console.log(nextMovie[0])

        res.redirect(`/movies/${nextMovie0._id}`)
    } catch (error) {
        next(error);
    }
});

router.get("/:movieId/voteIgnore", isLoggedIn, (req, res, next) => {
    res.redirect("/");
});

// @desc    Posts vote to our database (like)
// @route   POST /votes/:movieId/voteLike
// @access  Public

router.post("/:movieId/voteIgnore", isLoggedIn, async (req, res, next) => {
    const ignore = true;
    const { movieId } = req.params;
    const userId = req.session.currentUser._id;
    try {
        await Vote.create({ userId, movieId, ignore });
        res.redirect("/");
    } catch (error) {
        next(error);
    }
});



module.exports = router;