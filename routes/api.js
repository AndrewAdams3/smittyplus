var express = require('express');
var router = express.Router();
var test = require('../schemas/test');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({msg:"hello"})
})

router.get('/test', (req, res, next) => {
  test();
  res.send({ok: "ok"});
})

module.exports = router;
