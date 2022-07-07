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
    const user = req.session.currentUser
    try {
        await Vote.create({ userId, movieId, vote });


        let votedMovieIdArr = []
        let votes = await Vote.find({ userId: user._id })
        votes.forEach(el => {
            votedMovieIdArr.push(String(el.movieId))
        })

        let nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
        let nextMovie0 = nextMovie[0]

        while (votedMovieIdArr.includes(String(nextMovie0._id))) {
            // let testMovie = await Movie.find({})
            // console.log(testMovie.length)
            // console.log(votes.length)

            // if (await Movie.find({}) === votes.length) {
            //     res.redirect("/")
            //     break;
            // }
            nextMovie = await Movie.aggregate([{ $sample: { size: 1 } }]);
            nextMovie0 = nextMovie[0]


        }

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
        //RECOMMENDATION BLOCK
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