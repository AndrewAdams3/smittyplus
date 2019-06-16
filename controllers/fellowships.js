var Fellowships = require('../schemas/FellowshipModel');

module.exports.getFellowships = function(req, res, next) {
  var fs = [];
  Fellowships.find({ parentId: null }, async (err, docs) => {
    if (!err) {
      if (docs.length > 0) {
        for (var doc in docs) {
          var { name, link, _id } = docs[doc];
          fs.push({
            name: name,
            link: link,
            ops: [],
            id: _id,
            parentId: null
          })
          //console.log("id: ", _id, name);
          await docs[doc].getChildren({ condition: { parentId: _id } }, (err, children) => {
            for (var child in children) {
              var { name, link } = children[child];
              //console.log(fs[doc].name, children[child]);
              fs[doc].ops.push({ name: name, link: link });
            }
          })
        }
        res.locals.fs = fs;
        next();
      }
    }
  })
}

module.exports.getFellowshipsByDiscipline = function(req, res, next){
  let byDiscipline = [];
  for (var i in res.locals.fs) {
    if (res.locals.fs[i].link == req.params.discipline) {
      Fellowships.findOne({
        _id: res.locals.fs[i].id,
        parentId: null
      }, (err, discipline) => {
        if (!err) {
          discipline.getChildren((err, children) => {
            if (!err) {
              for (var i in children) {
                const { name, link } = children[i];
                byDiscipline.push({ name, link });
              }
              res.locals.byDiscipline = byDiscipline;
              next();
            } else {
              console.error(err);
              next()
            }
          })
        } else {
          console.error(err);
          next();
        }
      })
    }
  }
}