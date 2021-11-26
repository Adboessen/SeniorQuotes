var express = require('express');
var router = express.Router();

var studentController = require('../controllers/studentController');

router.get('/', studentController.studentList);

module.exports = router;