var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //redirect homepage to catalog
  res.redirect('/catalog');
});

module.exports = router;
