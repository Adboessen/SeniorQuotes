var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //redirect homepage to catalog
  res.redirect('/students');
});

//Connect to React
router.post('/post', (req, res) => {
  console.log('Connected to React');
  res.redirect('/');
});

module.exports = router;
