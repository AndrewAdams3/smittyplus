var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fCategories = [,
    { name: 'Biology', link: "biology", ops: [] },
    { name: 'Biochemistry', link: "biochem", ops: [] },
    { name: 'Computer Science', link: "computer-science", ops: [{ name: "tester" }, { name: "programmer" }] },
    { name: 'Engineering', link: "engineering", ops: [] },
    { name: 'Politics', link: "politics", ops: [] }
  ];
  res.render('index/index', {
    fCategories: fCategories
  });
});

router.get('/two', function (req, res, next) {

});

module.exports = router;
