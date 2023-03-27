// Requiring libraries and frameworks
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const Contact = require("../models/contact.js");

/**
 * (POST)
 *
 * The function used to handle a new register request from the user
 *
 * @Params:
 * req: Newly registered user's information.
 * res: Responding result status and operation.
 * next: No operation executed.
 */
exports.userRegister = async (req, res, next) => {
    passport.authenticate('signup', { session: false }, async (err, user, info) => {
        res.redirect('/views/homepage.html');
    })(req, res, next);
}

/**
 * (POST)
 *
 * The function used to handle a login request from the user
 *
 * @Params:
 * req: Information of the user to login.
 * res: Responding result status and operation.
 * next: No operation executed.
 */
exports.userLogin = async (req, res, next) => {
    // the login strategy automatically picks up the specified username and password field, the validate login credentials
    // in the callback, sign the JWT and attch it to response cookie
    passport.authenticate('login', async (err, user, info) => {
        try {
            // break authentication if no user is provided
            if (err || !user) (res.redirect('/views/Errorpage.html'));

            // this function is attached to req by passport after authentication. It will attach the specified user info to req.user.
            // signs the body returned from passport with jwt and attach it to res body
            req.login(user, { session: false }, async (error) => {
                if (error) throw next(error);
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');
                res.cookie("Authorization", token, { maxAge: 3600000 });
                res.redirect('/views/overview.html');

            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next); // trailing callback, not used
};

/**
 * (GET)
 *
 * The function used to handle the logout request from the user while clearing the user's cookie
 *
 * @Params:
 * req: The requesting user's authentication information.
 * res: Responding result status and operation.
 * next: No operation executed.
 */
exports.userLogout = function (req, res, next) {
    try {
        console.log("logging you out")
        console.log("current token: " + req.cookies.Authorization);

        res.clearCookie("Authorization");
        res.redirect('/views/homepage.html');
    }
    catch (err) {
        next(err);
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of getting all users.
 *
 * @Params:
 * req: No request information needed.
 * res: Responding all users.
 */
exports.getAll = async (req, res) => {
    const allUsers = await User.find({});
    res.json(allUsers);
};

// /**
//  * The function is used to get the current mode of the user.
//  */
// exports.getMode = async (req, res) => {
//     const user = await User.find({_id: req.user._id});
//     res.status(200);
//     return res.json(user.mode);
// };
// /**
//  * The function is used to set the mode of the user.
//  */
//  exports.setMode = async (req, res) => {
//     const user = await User.findOne({_id: req.user._id});
//     console.log(user)
//     let newMode = "";
//     if (user.mode == "light"){
//         newMode = "dark";
//     }
//     else{
//         newMode = "light";
//     }
//     user.mode = newMode;
//     user.save({});
//     res.status(200);
//     return res.json(user.mode);
// };
