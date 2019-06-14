var Discipline = require('./DisciplineModel');
var Category = require('./CategoryModel');
function test() {
  let bio = new Category({
    name: "Bio",
    link: "Bio"
  });
  let cs = new Category({
    name: "computer Science",
    link: "computer-science"
  });
  let cb = new Discipline({
    name: "cell bio",
    link: "cell-bio"
  })
  let t = new Discipline({
    name: "tester",
    link: "tester"
  })
  bio.save(function (err, disciplines) {
    if (!err) {
      disciplines.appendChild({
        name: "cell bio",
        link: "cell-bio"
      }, function (err, op) {
        if (!err) {
          console.log(op);
        }
      })
    }
  })
  cs.save(function (err, disciplines) {
    if (!err) {
      disciplines.appendChild({
        name: "tester",
        link: "tester"
      }, function (err, op) {
        if (!err) {
          console.log(op);
        }
      })
    }
  })
}

module.exports = test;