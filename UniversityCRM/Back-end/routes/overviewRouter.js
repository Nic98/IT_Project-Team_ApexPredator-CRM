const express = require('express')
//const passport = require("passport");
//require('../config/passportCu')(passport);
const router = express.Router();
const con = require("../controllers/overviewController");

router.get('/getTopContact/', (req, res)=> con.getTopContact(req, res));
router.get('/getCategory/', (req, res)=> con.getAllCategory(req, res));
router.get('/sortedContacts/', (req, res)=> con.sortedContacts(req, res));
router.get('/getRecentTask/', (req, res)=> con.getRecentTask(req, res));
router.get('/getLatestEvent/', (req, res)=> con.getLatest3Event(req, res));
router.get('/getTopEvent/', (req, res)=> con.getTop3Event(req, res));
module.exports = router;