const router = require('express').Router();
// IMDB API test requirement
const metafilm = require("metafilm");
const Movie = require("../models/Movie");

// @desc    App home page
// @route   GET /
// @access  Public
router.get("/", async (req, res, next) => {
  const user = req.session.currentUser
  try {
    const movieFromDB = await Movie.aggregate([{ $sample: { size: 1 } }]);
    res.render("index", { user, movieFromDB })
  } catch (error) {
    next(error);
  }
})

module.exports = router;
