const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");
const fileUploader = require('../config/cloudinary.config');

// @desc    Displays a view where user can edit its details
// @route   GET /edit
// @access  User

router.get('/edit', async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const userFromDB = await User.findById(user._id)
        res.render('user/edit-user', { userFromDB, user })
    } catch (error) {
        next(error)
    }

})

// @desc    Displays a view where user can edit its details
// @route   POST /edit
// @access  User

router.post('/edit', fileUploader.single('imageUrl'), async (req, res, next) => {
    const user = req.session.currentUser
    const { username, email, existingImage } = req.body

    let imageUrl;
    if (req.file) {
        imageUrl = req.file.path;
    } else {
        imageUrl = existingImage
    }

    try {
        const userFound = await User.findByIdAndUpdate(user._id, { username, email, imageUrl }, { new: true })
        req.session.currentUser = userFound
        res.redirect('/')
    } catch (error) {
        next(error)
    }
})


router.get('/delete', (req, res, next) => {
    const user = req.session.currentUser
    res.render('user/deleteConfirmation', { user })
})
// @desc    Deletes user account
// @route   POST /edit
// @access  User

router.post('/delete', async (req, res, next) => {
    const userId = req.session.currentUser._id
    try {
        await User.findByIdAndDelete(userId);
        req.session.destroy((err) => {
            if (err) {
                next(err)
            } else {
                res.redirect('/');
            }
        });
    } catch (error) {
        next(error)
    }
});



module.exports = router;