const express = require ("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");

// @desc    Gets movie-detail view again and loads a new random item
// @route   GET /votes/:movieId/voteLike
// @access  Public

router.get("/:movieId/voteLike", (req, res, next) => {
    res.redirect("/movies");
});

// @desc    Posts vote to our database (like)
// @route   POST /votes/:movieId/voteLike
// @access  Public

router.post("/:movieId/voteLike", async (req, res, next) => {
    const vote = true;
    const {movieId} = req.params;
    const userId = req.session.currentUser._id;
    try {
        await Vote.create({userId, movieId, vote});
        res.redirect("/movies");
    } catch (error) {
        next(error);
    }
});

// @desc    Gets movie-detail view again and loads a new random item
// @route   GET /votes/:movieId/voteDislike
// @access  Public

router.get("/:movieId/voteDislike", (req, res, next) => {
    res.redirect("/movies");
});

// @desc    Posts vote to our database (dislike)
// @route   POST /votes/:movieId/voteDislike
// @access  Public

router.post("/:movieId/voteDislike", async (req, res, next) => {
    const vote = false;
    const {movieId} = req.params;
    const userId = req.session.currentUser._id;
    try {
        await Vote.create({userId, movieId, vote});
        res.redirect("/movies");
    } catch (error) {
        next(error);
    }
});



module.exports = router;