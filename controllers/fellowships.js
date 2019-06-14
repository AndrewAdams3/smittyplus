var Fellowship = require('../schemas/FellowshipModel');

module.exports.getFellowships = function(req, res, next) {
  var fs = [];
  Fellowship.find({ parentId: null }, async (err, docs) => {
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