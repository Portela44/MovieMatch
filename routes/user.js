const express = require('express');
const session = require('express-session');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");
const fileUploader = require('../config/cloudinary.config');

// @desc    Displays a view where user can edit its details
// @route   GET /user/edit
// @access  Public
router.get('/edit', async (req, res, next) => {
    const user = req.session.currentUser
    try {
        const userFromDB = await User.findById(user._id)
        res.render('user/edit-user', { userFromDB, user })
    } catch (error) {
        next(error)
    }
});

// @desc    Displays a view where user can edit its details
// @route   POST /user/edit
// @access  Public
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
});

// @desc    Previous step to delete user account, show confirmation screen.
// @route   GET /user/delete
// @access  Public
router.get('/delete', (req, res, next) => {
    const user = req.session.currentUser
    res.render('user/deleteConfirmation', { user })
});


// @desc    Deletes user account from db.
// @route   POST /user/delete
// @access  Public
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
        next(error);
    }
});

// @desc    Shows userlist to Admin.
// @route   GET /user/delete
// @access  Private
router.get('/userList', async (req, res, next) => {
    const user = req.session.currentUser;
    try {
        const users = await User.find({});
        res.render('user/userList', { users, user });
    } catch (error) {
        next(error);
    }
});

// @desc    Shows genre list to user, so genre preferences can be stablished.
// @route   GET /user/preferences
// @access  Public
router.post("/preferences", async (req, res, next) => {
    const { preferences } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.session.currentUser._id, { preferences }, { new: true });
        req.session.currentUser = updatedUser;
    } catch (error) {
        next(error)
    }
});

module.exports = router;