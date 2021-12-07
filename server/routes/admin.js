//import express and router
var express = require("express");
var router = express.Router();

//import student controller
var adminController = require("../controllers/adminController");

//login page
router.get("/", adminController.adminLogin);
//approve page
router.post("/approve", adminController.adminApprove);
//deny page
router.post("/deny", adminController.adminDeny);

module.exports = router;
