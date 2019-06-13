const Discipline = require('./FellowshipsModel');
function test() {
  let d = new Discipline({
    name: "test",
    link: "test"
  });
  d.save(function (err, ops) {
    if (!err) {
      ops.appendChild({ name: "ctest1", link: "ctest1" }, function (err, op) {
        if (!err) {
          console.log(op);
        }
      })
    }
  })
}

module.exports = test;