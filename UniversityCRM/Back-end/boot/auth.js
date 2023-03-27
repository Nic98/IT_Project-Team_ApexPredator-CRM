const passport = require('passport');
const bcrypt = require('bcryptjs');

var JwtStrategy = require('passport-jwt').Strategy,
  localStrategy = require('passport-local').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModel = require('../models/user');

module.exports = function () {

  var cookieExtractor = function (req) {
    var token = null;
    if (req && req.cookies) token = req.cookies['Authorization'];
    return token;
  };

  /**
   *  JWT verification
   */
  passport.use('jwt',
    new JwtStrategy(
      {
        secretOrKey: 'TOP_SECRET',
        jwtFromRequest: cookieExtractor
      },
      async (token, done) => {
        try {
          // add guard logic here
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  /**
   * Regsister strategy
   * 
   * seek for specified username and password filed from request body, upload it to the DB and attach username and password to req.user
   */
  passport.use('signup', new localStrategy({ usernameField: 'email_address', passwordField: 'password', passReqToCallback: true },
    async (req, email, password, done) => {
      try {
        var salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
        await UserModel.create(req.body);
        const credentials = { username: req.body.email_address, password: req.body.password };

        return done(null, credentials);
      } catch (error) {
        done(error);
      }
    })
  );

  // login strategy
  passport.use('login', new localStrategy({ usernameField: 'email_address', passwordField: 'password' },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email_address: email });

        // throw error if user is not found with the given email address
        if (!user) return done(null, false, { message: 'User not found' });

        // validate password on user schema side, and return error message if invalid 
        if (!await user.isValidPassword(password)) return done(null, false, { message: 'Wrong Password' });

        console.log(user);
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    })
  );

};
