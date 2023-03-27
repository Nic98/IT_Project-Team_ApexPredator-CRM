
const express = require('express');

const userRouter = express.Router();
const userController = require('../controllers/userController.js');

const passport = require('passport');
const jwt = require('jsonwebtoken');

//routers
userRouter.post('/register', userController.userRegister);

userRouter.post('/login', userController.userLogin);

userRouter.get('/logout', userController.userLogout);

userRouter.get('/all', userController.getAll);

// userRouter.get('/getMode', userController.getMode);

// userRouter.post('/setMode', userController.setMode);



module.exports = userRouter;
