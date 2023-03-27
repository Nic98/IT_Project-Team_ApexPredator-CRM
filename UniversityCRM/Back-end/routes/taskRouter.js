const express = require('express')
//const passport = require("passport");
//require('../config/passportCu')(passport);
const router = express.Router();
const con = require("../controllers/taskController");

/**
 * Category
 */
router.post('/addCategory', (req, res) => con.createCategory(req, res));
router.get('/category/all', (req, res) => con.getAllCategory(req, res));
// router.post('/category/findOne', (req, res) => con.getCategoryByName(req, res));
router.post('/category', (req, res) => con.editCategory(req, res));
router.delete('/categorys/:_id', (req, res) => con.deleteCategory(req, res));

/**
 * Task
 */
router.post('/', (req, res) => con.createTask(req, res));
router.get('/all', (req, res) => con.getAllTask(req, res));
router.delete('/deleteTask/:_id', (req, res) => con.deleteTask(req, res))
router.post('/updateTask', (req, res) => con.updateTask(req, res))

module.exports = router;