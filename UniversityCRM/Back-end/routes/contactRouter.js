const express = require('express')
//const passport = require("passport");
//require('../config/passportCu')(passport);
const contactRouter = express.Router();
const contactController = require("../controllers/contactControllelr");

contactRouter.post('/addContact', (req, res)=>contactController.addContact(req, res));
contactRouter.delete('/deleteContact/:_id', (req, res)=>contactController.deleteContact(req, res));
contactRouter.get('/allContacts', (req, res)=>contactController.allContacts(req, res));
contactRouter.get('/getOneContact/:_id', (req, res)=>contactController.getOneContact(req, res));
contactRouter.post('/editContact', (req, res)=>contactController.editContact(req, res));
contactRouter.post('/changeSortMode', (req, res)=>contactController.sortByAttribute(req, res));

module.exports = contactRouter;