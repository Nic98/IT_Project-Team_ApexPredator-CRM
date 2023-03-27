// Requiring all the used models
const Contact = require('../models/contact.js');
const User = require('../models/user.js');
const Event = require('../models/event.js');
const Task = require('../models/task.js');
const Category = require('../models/category.js')

function sortByCreatingTime(A, B){
    return B.createdAt - A.createdAt
}
/**
 * (GET)
 *
 * The function used to handle the request of getting top 5 contacts by the order of them.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.getTopContact = async (req, res) => {
    try{
        const allContact = await Contact.find({user_id: req.user._id})
        allContact.sort(sortByCreatingTime);
        res.status(200);
        return res.json(allContact);
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}
/** 
 * The function is used to get recent tasks for the current user.
*/
exports.getRecentTask = async (req, res) => {
    try{
        const allTask = await Task.find({user_id: req.user._id})
        allTask.sort(sortByCreatingTime);
        let taskWithCat = [];
        for (index in allTask){
            var theTask = allTask[index].toJSON();
            let itsCategory = await Category.findOne({_id: theTask.belongsTo})
            if(itsCategory !== null){
                theTask.categroy = itsCategory.name;
                taskWithCat.push(theTask)
            }
        }
        res.status(200);
        return res.json(taskWithCat);
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * ()
 *
 * The function used to handle .
 *
 * @Params:
 * req:
 * res: Responding result status and operation.
 */
exports.getAllCategory = async (req, res) => {
    try{
        const allCat = await Category.find({user_id: req.user._id})
        res.status(200);
        return res.json(allCat)
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (METHOD)
 *
 * The function used to handle the sorting operation of events by its priority.
 *
 * @Params:
 * eventA: An event.
 * eventB: Another event to compare.
 */
function sortByPriority(A, B){
    return B.priority - A.priority
}

/**
 * (GET)
 *
 * The function used to get sorted contacts.
 * Contacts are sorted by their priorities.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
 exports.sortedContacts = async (req, res) => {
    try{
        let allContact = await Contact.find({user_id: req.user._id});
        console.log(allContact);
        allContact.sort(sortByPriority).reverse();
        return res.json(allContact);
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (GET)
 *
 * The function used to handle the getting operation of the top 3 events.
 * Top 3 events are sorted by their priorities for now since we did not
 * specify the schedule time for a event in our model.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.getTop3Event = async (req, res) => {
    try{
        let allEvent = await Event.find({user_id: req.user._id});
        console.log(allEvent);
        allEvent.sort(sortByPriority);
        return res.json(allEvent);
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (METHOD)
 *
 * The function used to handle the sorting operation of events by its date.
 *
 * @Params:
 * eventA: An event.
 * eventB: Another event to compare.
 */
function sortByDate(eventA, eventB){
    return eventA.schedule_date - eventB.schedule_date
}

/**
 * (GET)
 *
 * The function used to handle the getting operation of getting the top 3 events based on their schedule dates.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.getLatest3Event = async (req, res) => {
    try{
        let allEvent = await Event.find({user_id: req.user._id});
        console.log(allEvent);
        allEvent.sort(sortByDate);
        let now = new Date();
        // remove expired events.
        for(i=0;i<allEvent.length;i++){
            if(allEvent[i].schedule_date - now <0){
                allEvent.shift();
            }
        }
        console.log(allEvent);
        return res.json(allEvent);
    }
    catch (err){
        res.status(400);
        res.send("Database Access Failure :(.")
    }
}

