const router = require('express').Router();
// IMDB API test requirement
const IMDb = require("name-to-imdb");
const metafilm = require("metafilm");

// @desc    App home page
// @route   GET /
// @access  Public
router.get("/", (req, res, next) => {
  const user = req.session.currentUser
  res.render("index", { user })
})

// @desc    App search page (only meant to test apis)
// @route   GET /
// @access  Public
router.get('/movie-search', async (req, res, next) => {
  const { movie } = req.query;
  try {
    const IMDbID = await IMDb(`${movie}`, function (err, res, inf) {
      return (res);
    });
    const movieInfo = await metafilm.id({ imdb_id: `${IMDbID}` });
    // res.render("searchResults", movieInfo);
    await res.json(movieInfo)
  } catch (error) {
    next(error);
  }
});



module.exports = router;
