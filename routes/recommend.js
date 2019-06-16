var express = require('express');
var router = express.Router();

//controllers
var getFellowships = require('../controllers/fellowships').getFellowships;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('recommend/recommend', {
    fellowships: res.locals.fs
  });
});

module.exports = router;
