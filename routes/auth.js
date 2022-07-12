const express = require('express');
const session = require('express-session');
const router = express.Router();
const isLoggedIn = require('../middlewares');
const User = require('../models/User');
const fileUploader = require('../config/cloudinary.config');
const bcrypt = require('bcrypt');
const saltRounds = 10;


// @desc    Displays a view where user can manage its profile
// @route   GET /profile
// @access  Public
router.get('/profile', isLoggedIn, (req, res, next) => {
  const user = req.session.currentUser
  res.render('auth/profile', { user })
})
// @desc    Displays form view to sign up
// @route   GET /auth/signup
// @access  Public
router.get('/signup', async (req, res, next) => {
  res.render('auth/signup');
})

// @desc    Displays form view to log in
// @route   GET /auth/login
// @access  Public
router.get('/login', async (req, res, next) => {
  res.render('auth/login');
})


// @desc    Sends user auth data to database to create a new user
// @route   POST /auth/signup
// @access  Public
router.post('/signup', fileUploader.single('imageUrl'), async (req, res, next) => {
  const { email, password, password2, username, existingImageSign } = req.body;
  // ⚠️ Add validations!
  if (!email || !password || !password2 || !username) {
    res.render('auth/signup', { error: 'All fields are mandatory, please fill them before submiting' })
    return;
  }

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = existingImageSign;
  }


  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.render('auth/signup', { error: 'Password must be at least 6 characters long and have lowercase letters, uppercase letters and at least one number.' })
    return;
  }
  if (password !== password2) {
    res.render('auth/signup', { error: 'The passwords entered are different, please try again' })
    return;
  }
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ username, email, hashedPassword, imageUrl });
    res.render('auth/login');
  } catch (error) {
    next(error)
  }
});

// @desc    Sends user auth data to database to authenticate user
// @route   POST /auth/login
// @access  Public
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  // ⚠️ Add more validations!
  if (!email || !password) {
    res.render('auth/login', { error: 'All fields are mandatory, please fill them before submiting' })
    return;
  }
  try {
    // Remember to assign user to session cookie:
    const user = await User.findOne({ email: email });
    if (!user) {
      res.render('auth/login', { error: "User not found" });
      return;
    } else {
      const match = await bcrypt.compare(password, user.hashedPassword);
      if (match) {
        res.redirect('/');
      } else {
        res.render('auth/login', { error: "Unable to authenticate user" });
      }
    }
  } catch (error) {
    next(error);
  }
})

// @desc    Destroy user session and log out
// @route   POST /auth/logout
// @access  Private
router.post('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err)
    } else {
      res.redirect('/auth/login');
    }
  });
})

module.exports = router;
