const express = require('express');

const profileRouter = express.Router();
const con = require("../controllers/profileController")

profileRouter.get("/getProfile", (req, res)=> con.getUserData(req, res));
profileRouter.post("/editProfile", (req, res)=> con.editUserProfile(req, res));

module.exports = profileRouter