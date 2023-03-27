var express = require('express');
const formData = require("express-form-data");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
require('dotenv').config();
const passport = require('passport');
const path = require('path');

require('./boot/auth')();


const app = express();


// Connect to database
require('./models/index.js');

// parse application/json
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());



app.use(express.static(path.join(__dirname, 'render')));

app.get('/', (req, res, next) => {

    res.render("homepage");
});

// Set up user routes
const userRouter = require('./routes/userRouter.js');
const contactRouter = require('./routes/contactRouter.js');
const taskRouter = require('./routes/taskRouter.js');
const eventRouter = require('./routes/eventRouter.js');
const overviewRouter = require('./routes/overviewRouter');
const profileRouter = require('./routes/profileRouter.js');
const modeRouter = require('./routes/modeRouter.js')

app.use('/user', userRouter);
app.use('/mode', passport.authenticate('jwt', { session: false }),   modeRouter)
app.use('/contact', passport.authenticate('jwt', { session: false }),   contactRouter);
app.use('/profile', passport.authenticate('jwt', { session: false }), profileRouter);
app.use('/event',  passport.authenticate('jwt', { session: false }), eventRouter);
app.use('/overview', passport.authenticate('jwt', { session: false }), overviewRouter);
app.use('/task', passport.authenticate('jwt', { session: false }), taskRouter);



/**
 * Error Handler
 */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

// start server and listen for HTTP requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Apex Predator is listening on http://localhost:${port}`)
});
module.exports = app;