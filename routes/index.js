var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fCategories = [,
    { name: 'Biology', ops: [] },
    { name: 'Biochemistry', ops: [] },
    { name: 'Computer Science', ops: [{name: "tester"}, {name: "programmer"}]},
    { name: 'Engineering', ops: [] },
  ];
  res.render('index/index', {
    fCategories: fCategories
  });
});

router.get('/two', function (req, res, next) {

});

module.exports = router;
