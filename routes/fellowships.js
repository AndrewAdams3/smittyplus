var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var fCategories = [
    { name: 'Biology', link: "biology", ops: [] },
    { name: 'Biochemistry', link: "biochem", ops: [] },
    { name: 'Computer Science', link: "computer-science", ops: [{ name: "tester" }, { name: "programmer" }] },
    { name: 'Engineering', link: "engineering", ops: [] },
    { name: 'Politics', link: "politics", ops: [] }
  ];
  res.render('fellowships/fellowships', {
    fCategories: fCategories
  });
});

router.get('/:discipline', (req, res, next) => {
  console.log("params: " + req.params.discipline);
  var fCategories = [
    { name: 'Biology', link: "biology", ops: [] },
    { name: 'Biochemistry', link: "biochem", ops: [] },
    { name: 'Computer Science', link: "computer-science", ops: [{ name: "tester" }, { name: "programmer" }] },
    { name: 'Engineering', link: "engineering", ops: [] },
    { name: 'Politics', link: "politics", ops: [] }
  ];
  let ops = [];
  let discipline = "";
  for(var i in fCategories){
    if (fCategories[i].link == req.params.discipline ){
      ops = fCategories[i].ops;
      discipline = fCategories[i].name;
    }
  }
  res.render('fellowships/byDiscipline/byDiscipline', {
    fCategories: fCategories,
    ops: ops,
    discipline: discipline
  })
})

module.exports = router;
