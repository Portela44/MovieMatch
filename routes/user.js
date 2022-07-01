const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");

// @desc    Displays a view where user can edit its details
// @route   GET /edit
// @access  User

router.get('/edit', async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const userFromDB = await User.findById(user._id)
        res.render('user/edit-user', userFromDB)
    } catch (error) {
        next(error)
    }

})

// @desc    Displays a view where user can edit its details
// @route   POST /edit
// @access  User

router.post('/edit', async (req, res, next) => {
    const user = req.session.currentUser
    const { username, email } = req.body
    try {
        const userFound = await User.findByIdAndUpdate(user._id, { username, email }, { new: true })
        req.session.currentUser = userFound
        res.redirect('/')
    } catch (error) {
        next(error)
    }
})



module.exports = router;