var express = require('express');
var router = express.Router();

var Fellowship = require('../schemas/FellowshipModel');

router.get('/', function (req, res, next) {
  res.send({msg:"hello"})
})

router.get('/create/fellowship/:discipline/:opName', (req, res, next) => {
  const {discipline, opName} = req.params;
  Fellowship.findOne({"name": discipline}, (err, doc) => {
    if(doc){
      console.log("cat found");
      doc.getChildren({
        condition: { name: opName },
        sort: { name: 1 }
      }, (err, doc2) => {
        if(doc2.length){
          console.log("disc found", doc2);
          res.send({disc: true})
        } else {
          console.log("disc not found");
          doc.appendChild({
            name: opName,
            link: opName
          }, (err, doc3) => {
            res.send({discCreated: true});
          })
        }
      });
    } else{
      console.log("cat not found");
      var cat = new Fellowship({
        name: discipline,
        link: discipline
      })
      cat.save((err, dis) => {
        dis.appendChild({
          name: opName,
          link: opName
        });
      });
      res.send({ created: true });
    }
  })
})

module.exports = router;
