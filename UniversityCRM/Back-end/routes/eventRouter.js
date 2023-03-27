const express = require('express');
const eventRouter = express.Router();
const eventController = require("../controllers/eventController");

eventRouter.get("/allEvent/:user_id", (req, res) => eventController.allEvent(req, res));
eventRouter.get("/getOneEvent/:_id", (req, res) => eventController.getOneEvent(req, res));
eventRouter.post("/addEvent", (req, res) => eventController.addEvent(req, res));
eventRouter.delete("/deleteEvent/:_id", (req, res) => eventController.deleteEvent(req, res));
eventRouter.put("/editEvent/:_id", (req, res) => eventController.editEvent(req, res));

module.exports = eventRouter;