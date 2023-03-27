
const express = require('express');

const modeRouter = express.Router();
const modeController = require('../controllers/modeController.js');

const passport = require('passport');
const jwt = require('jsonwebtoken');

modeRouter.get('/getMode', modeController.getMode);

modeRouter.post('/setMode', modeController.setMode);

module.exports = modeRouter;