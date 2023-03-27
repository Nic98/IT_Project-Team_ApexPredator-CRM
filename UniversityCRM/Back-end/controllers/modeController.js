// Requiring libraries and frameworks
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user');
const jwt = require("jsonwebtoken");

/**
 * The function is used to get the current mode of the user.
 */
 exports.getMode = async (req, res) => {
    const user = await User.findOne({_id: req.user._id});
    res.status(200);
    return res.json(user.mode);
};
/**
 * The function is used to set the mode of the user.
 */
 exports.setMode = async (req, res) => {
    const user = await User.findOne({_id: req.user._id});
    let newMode = "";
    if (user.mode == "light"){
        newMode = "dark";
    }
    else{
        newMode = "light";
    }
    user.mode = newMode;
    user.save({});
    res.redirect("back")
};