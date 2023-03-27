// Requiring libraries and frameworks
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const Contact = require("../models/contact.js");

/**
 * (GET)
 *
 * The function used to handle the request of getting the information of a specific user.
 *
 * @Params:
 * req: The id of the user to get.
 * res: Responding result status and operation.
 */
exports.getUserData = async (req, res) => {
    const user = await User.findById(req.user._id);
    res.status(200);
    res.json(user);
};

/**
 * (POST)
 *
 * The function used to handle the request of editing the profile of the user.
 *
 * @Params:
 * req: The id and the new information of the user to edit.
 * res: Responding result status and operation.
 */
exports.editUserProfile = async (req, res) => {
    try{
        let id = req.user._id;
        let updates = req.body;
        await User.findByIdAndUpdate(id, updates);
        res.status(200);
        res.redirect('/views/profile.html');
        // res.send("Profile information successfully updated!");
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}