const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");
const User = require("../models/User")
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
    const user = req.session.currentUser
    try {
        const existingVote = await Vote.find({ userId: userId, movieId: movieId });
        if (existingVote) {
            await Vote.findOneAndDelete({ userId: userId, movieId: movieId });
        }
        await Vote.create({ userId, movieId, vote });
        let votedMovieIdArr = [];
        let votes = await Vote.find({ userId: user._id });

        votes.forEach(el => {
            votedMovieIdArr.push(String(el.movieId));
        })

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
        res.redirect(`/movies/${nextMovie0._id}`);
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
    const user = req.session.currentUser;
    try {
        const existingVote = await Vote.find({ userId: userId, movieId: movieId });
        if (existingVote) {
            await Vote.findOneAndDelete({ userId: userId, movieId: movieId });
        }
        await Vote.create({ userId, movieId, vote });
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
        res.redirect(`/movies/${nextMovie0._id}`);
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
    const user = req.session.currentUser;
    try {
        const existingVote = await Vote.find({ userId: userId, movieId: movieId });
        if (existingVote) {
            await Vote.findOneAndDelete({ userId: userId, movieId: movieId });
        }
        await Vote.create({ userId, movieId, ignore });
        let votedMovieIdArr = [];
        let votes = await Vote.find({ userId: user._id });

        votes.forEach(el => {
            votedMovieIdArr.push(String(el.movieId));
        })

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
        res.redirect(`/movies/${nextMovie0._id}`);
    } catch (error) {
        next(error);
    }
});

module.exports = router;