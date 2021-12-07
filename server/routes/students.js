//import express and router
var express = require("express");
var router = express.Router();

//import student controller
var studentController = require("../controllers/studentController");

//route '/' to studentBook
router.get("/", studentController.studentBook);
// create student route
router.get("/create", studentController.studentCreateGet);
//update student route
router.get("/update", studentController.studentUpdateGet);
//delete student route
router.get("/delete", studentController.studentDeleteGet);
//view student profile route
router.get("/profile", studentController.studentProfile);

module.exports = router;
