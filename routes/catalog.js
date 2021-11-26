//import express and router
var express = require('express');
var router = express.Router();

//import student controller
var studentController = require('../controllers/studentController');

//route '/' to studentList
router.get('/', studentController.studentList);

module.exports = router;