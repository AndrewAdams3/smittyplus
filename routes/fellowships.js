var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var fCategories = [
    { name: 'Biology', ops: [] },
    { name: 'Biochemistry', ops: [] },
    { name: 'Computer Science', ops: [{ name: "tester" }, { name: "programmer" }] },
    { name: 'Engineering', ops: [] },
  ];
  res.render('fellowships/fellowships', {
    fCategories: fCategories
  });
});

module.exports = router;
