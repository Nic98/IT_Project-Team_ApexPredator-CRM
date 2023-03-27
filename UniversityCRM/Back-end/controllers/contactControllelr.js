// Require the contact model
const Contact = require('../models/contact.js');
const User = require('../models/user.js');
/**
 * (POST)
 *
 * The function used to handle the request of adding a new contact.
 *
 * @Params:
 * req: Information of the newly added contact with JSON format.
 * res: Responding result status and operation.
 */
exports.addContact = async (req, res) => {
    try {
        const newContact = new Contact({
            type: req.body.type,
            name: req.body.name,
            phone_number: req.body.phone_number,
            status: req.body.status,
            company: req.body.company,
            address: req.body.address,
            priority: req.body.priority,
            description: req.body.description,
            email_address: req.body.email_address,
            user_id: req.user._id
        });
        newContact.save((err) => { });
        res.redirect(301, '/views/Contact.html')
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of deleting an existing contact.
 *
 * @Params:
 * req: The id of the contact to delete.
 * res: Responding result status and operation.
 */
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndRemove(req.params._id);
        res.status(200);
        // res.redirect('views/Contact.html')
        return res.json("Contact Successfully Deleted :)");
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of displaying all contacts.
 *
 * @Params:
 * req: The requesting user's authentication information.
 * res: Responding result status and operation.
 */
exports.allContacts = async (req, res) => {
    
    try{
        const allContact = await Contact.find({user_id: req.user._id});

        const user = await User.findOne({_id: req.user._id});

        if (user.sortMode == "time") {
            allContact.sort(sortByCreatingTime);
        } else if (user.sortMode == "priority") {
            allContact.sort(sortByPriority);
        }

        if (!allContact) {
            return res.json("There is no such record :(");
        }

        res.status(200);
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
 * The function used to handle the request of displaying one contact.
 *
 * @Params:
 * req: The requesting user's authentication information.
 * res: Responding result status and operation.
 */
exports.getOneContact = async (req, res) => {
    try {
        console.log(req.cookies.Authorization);
        console.log(req.user);
        console.log("--------------------------------")
        const theContact = await Contact.findById(req.params._id);
        console.log(theContact)
        if (!theContact) {
            return res.json("There is no such record :(");
        }
        res.status(200);
        return res.json(theContact);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}



/**
 * (POST)
 *
 * The function used to handle the request of editing a specific contact.
 *
 * @Params:
 * req: The id and the new information of the contact to edit.
 * res: Responding result status and operation.
 */
exports.editContact = async (req, res) => {
    try{
        let id = req.body._id;
        let updates = req.body;
        delete updates._id;
        await Contact.findByIdAndUpdate(id, updates);
        res.redirect(301, '/views/Contact.html')

    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

exports.sortByAttribute = async (req, res) => {
    const user = await User.findOne({_id: req.user._id});
    user.sortMode = req.body.priority;
    user.save({});
    res.redirect("back")
}

function sortByCreatingTime(A, B){
    return B.createdAt - A.createdAt
}

function sortByPriority(A, B){
    return A.priority - B.priority
}