// Requiring the task model and the category model
const Task = require('../models/task.js');
const Category = require('../models/category.js');
const Contact = require("../models/contact.js");


/**
 * (POST)
 *
 * The function used to handle the request of adding a new category.
 *
 * @Params:
 * req: Information of the newly added event with JSON format.
 * res: Responding result status and operation.
 */
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name,
            category_code: req.body.category_code,
            // user_id: req.body._id,
            user_id: req.user._id,
        });
        newCategory.save((err) => { });
        res.status(200);
        res.redirect("/views/task.html")
        // return res.json(newCategory);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of displaying all categories.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.getAllCategory = async (req, res) => {
    try {
        const existCategory = await Category.find({ user_id: req.user._id });
        res.status(200);
        return res.json(existCategory);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(")
    }
}

/**
 * (GET)
 *
 *  * The function used to handle the request of getting an specific category by its name.
 *
 * @Params:
 * req: The name information of the category to get
 * res: Responding result status and operation.
 */
exports.getCategoryByName = async (req, res) => {
    try {
        const existCategory = await Category.find({
            name: req.body.id,
        });
        if (!existCategory) {
            throw new Error("Category does not exist!");
        }
        res.status(200);
        return res.json(existCategory);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of editing a specific category.
 *
 * @Params:
 * req: The id and the new information of the category to edit.
 * res: Responding result status and operation.
 */
exports.editCategory = async (req, res) => {
    try {
        console.log(req.body);
        let id = req.body._id;
        let updates = req.body;
        delete updates._id;
        await Category.findByIdAndUpdate(id, updates);
        res.status(200);
        res.redirect(`/views/task.html`);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of deleting an existing category.
 *
 * @Params:
 * req: The id of the category to delete.
 * res: Responding result status and operation.
 */
exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params._id);
        res.status(200);
        // res.redirect('views/task.html')
        return res.json("Category Successfully Deleted :)");
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * Task CURDs
 */

/**
 * (POST)
 *
 * The function used to handle the request of adding a new task.
 *
 * @Params:
 * req: Information of the newly added task with JSON format.
 * res: Responding result status and operation.
 */
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task({
            name: req.body.name,
            type: req.body.type,
            status: req.body.status,
            description: req.body.description,
            user_id: req.user._id,
            belongsTo: req.body.belongsTo,
        });
        newTask.save((err) => { });
        res.status(200);
        res.redirect("/views/task.html")
        // return res.json(newTask);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (GET)
 *
 * The function used to handle the request of displaying all tasks.
 *
 * @Params:
 * req: The requesting user's id information.
 * res: Responding result status and operation.
 */
exports.getAllTask = async (req, res) => {
    try {
        const task = await Task.find({ user_id: req.user._id });
        res.status(200);
        return res.json(task);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of editing a specific task.
 *
 * @Params:
 * req: The id and the new information of the task to edit.
 * res: Responding result status and operation.
 */
exports.updateTask = async (req, res) => {
    try {
        let id = req.body._id;
        let updates = req.body;
        delete updates._id;
        await Task.findByIdAndUpdate(id, updates);
        res.status(200);
        res.redirect(`/views/task.html`);
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}

/**
 * (POST)
 *
 * The function used to handle the request of deleting an existing task.
 *
 * @Params:
 * req: The id of the task to delete.
 * res: Responding result status and operation.
 */
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params._id);
        res.status(200);
        // res.redirect('views/task.html')
        return res.json("Task Successfully Deleted :)");
    }
    catch (err) {
        res.status(400);
        res.send("Database Access Failure :(");
    }
}
