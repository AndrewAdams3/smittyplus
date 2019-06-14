var express = require('express');
var router = express.Router();

var Fellowships = require('../schemas/FellowshipModel');

//router.use(getFellowships);

router.get('/', function(req, res, next) {
  res.render('fellowships/fellowships', {
    fellowships: res.locals.fs
  });
})

router.get('/pages/:discipline', (req, res, next) => {
  res.send({ok: 100});
})

router.get('/:discipline', (req, res, next) => {
  byDiscipline = [];
  for(var i in res.locals.fs){
    if(res.locals.fs[i].link == req.params.discipline){
      Fellowships.findOne({
        _id: res.locals.fs[i].id,
        parentId: null
      }, (err, discipline) => {
        if(!err){
          discipline.getChildren((err, children) => {
            if(!err){
              for (var i in children) {
                const { name, link } = children[i];
                byDiscipline.push({ name, link });
              }
              res.render('fellowships/byDiscipline/byDiscipline', {
                fellowships: res.locals.fs,
                fsByDiscipline: byDiscipline,
                discipline: req.params.discipline
              })
            } else {
              console.error(err);
            }
          })
        } else {
          console.error(err);
        }
      })
    }
  }
})

module.exports = router;
