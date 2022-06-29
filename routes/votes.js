const express = require ("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const Vote = require("../models/Vote");

// @desc    Posts vote to our database
// @route   POST /votes/:movieId/voteLike
// @access  Public

router.post("/:movieId/voteLike", async (req, res, next) => {
    const voteNumber = 4;
    try {
        await Vote.create({})
    } catch (error) {
        
    }
})



module.exports = router;