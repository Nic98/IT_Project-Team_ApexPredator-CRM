// Require the event model
const Event = require('../models/event');
const User = require('../models/user')

/**
 * (POST)
 *
 * The function used to handle the request of adding a new event.
 *
 * @Params:
 * req: Information of the newly added event with JSON format.
 * res: Responding result status and operation.
 */
exports.addEvent = async (req, res) => {
    try{
        const date = req.body.date;
        const schedule_date = new Date();
        schedule_date.setFullYear(date.year, date.month-1, date.day)
        schedule_date.setHours(8);
        schedule_date.setMinutes(0);
        schedule_date.setSeconds(0);
        let user = await User.findById(req.body.user_id);
        console.log("hellohello")
        const newEvent = new Event( {
            type: req.body.type,
            description: req.body.description,
            priority: req.body.priority,
            user_id: req.body.user_id,
            schedule_date: schedule_date
        });
        newEvent.save(err=>{});
        res.status(200);
        return res.send(newEvent);
    }
    catch(err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of deleting an existing event.
 *
 * @Params:
 * req: The id of the event to delete.
 * res: Responding result status and operation.
 */
exports.deleteEvent = async (req, res) => {
    try{
        await Event.findByIdAndDelete(req.params._id);
        res.status(200);
        return res.send("Event Successfully Deleted :)");
    }
    catch(err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of editing an event.
 *
 * @Params:
 * req: The id and the new information of the event to edit.
 * res: Responding result status and operation.
 */
exports.editEvent = async (req, res) => {
    try{
        const theEvent = await Event.findOne({"_id": req.params._id});
        if(!theEvent){
            res.status(400);
            return res.json("There is no such record :(");
        }
        await Event.findOneAndUpdate(req.params._id, req.body.content);
        const eventAfterEdit = await Event.findOne({"_id": req.params._id});
        res.status(200);
        return res.json(eventAfterEdit);
    }
    catch(err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of displaying all event.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.allEvent = async (req, res) => {
    try{
        const allEvent = await Event.find({user_id: req.params.user_id});
        if(!allEvent){
            return res.json("There is no such record :(");
        }
        res.status(200);
        return res.json(allEvent);
    }
    catch(err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of get a specific event.
 *
 * @Params:
 * req: The id of the event to get.
 * res: Responding result status and operation.
 */
exports.getOneEvent = async (req, res) => {
    try{
        const theEvent = await Event.findById(req.params._id);
        if(!theEvent){
            return res.json("There is no such record :(");
        }
        res.status(200);
        return res.json(theEvent);
    }
    catch(err){
        res.status(400);
        res.send("Database access failed.")
    }
}
