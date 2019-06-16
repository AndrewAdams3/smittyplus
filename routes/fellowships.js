var express = require('express');
var router = express.Router();

var Fellowships = require('../schemas/FellowshipModel');

var getFellowshipsByDiscipline = require('../controllers/fellowships').getFellowshipsByDiscipline;

router.get('/', function(req, res, next) {
  res.render('fellowships/fellowships', {
    fellowships: res.locals.fs
  });
})

router.get('/pages/:discipline', (req, res, next) => {
  res.send({ok: 100});
})

router.get('/:discipline', getFellowshipsByDiscipline, (req, res) => {
  res.render('fellowships/byDiscipline/byDiscipline', {
    fellowships: res.locals.fs,
    fsByDiscipline: res.locals.byDiscipline,
    discipline: req.params.discipline
  })
})

module.exports = router;
