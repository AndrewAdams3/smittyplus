var express = require('express');
var router = express.Router();
//controllers
var getFellowships = require('../controllers/fellowships').getFellowships;

//middleware
//router.use(getFellowships);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res.locals.fs);
  res.render('index/index', {
    fellowships: res.locals.fs
  });
});

module.exports = router;
