var express = require('express');
var router = express.Router();

var Fellowships = require('../schemas/FellowshipModel');

router.get('/', function (req, res, next) {
  res.send({msg:"hello"})
})

router.get('/create/fellowship/:discipline/:opName', (req, res, next) => {
  const {discipline, opName} = req.params;
  
})

router.post("/new/opportunity", (req, res, next) => {
  var {
    type, discipline, field, location,
    title, term, link, price, notes
  } = req.body;
  type = type.replace(/\s+/g, '-').toLowerCase();
  discipline = discipline.replace(/\s+/g, '-').toLowerCase();
  console.log("discipline", discipline);
  switch(type){
    case "fellowship": {
      Fellowships.findOne({ 
        "link": `/fellowships/${discipline}/`,
        parentId: null
      }, (err, doc) => {
        if (doc) {
          console.log("doc found");
          doc.getChildren({
            condition: { name: field },
            sort: { name: 1 }
          }, (err, doc2) => {
            if (doc2.length) {
              console.log("field found", doc2);
              res.redirect("/");
            } else {
              console.log("field not found");
              console.log("doc test: ", doc);
              doc.appendChild({
                name: field,
                link: `/${type + 's'}/${discipline}/pages/${field.replace(/\s+/g, '-').toLowerCase()}`,
                location: location,
                title: title, term: term,
                link: link, price: price,
                notes: notes
              }, (err, doc3) => {
                if(err) {
                  console.log(err);
                  res.send(err);  
                }
                console.log(doc3);
              })
              console.log("testing");
              res.redirect("/");
            }
          });
        } else {
          console.log("cat not found");
          cat = new Fellowships({ 
            name: discipline,
            link: `/fellowships/${discipline}/` 
          });
          cat.save(function (err, fields) {
            if(err) console.error(err);
            fields.appendChild({
              name: field,
              link: `/${type + 's'}/${discipline}/pages/${field.replace(/\s+/g, '-').toLowerCase()}`,
              location: location,
              title: title, term: term,
              link: link, price: price,
              notes: notes 
            }, function (err, vega) {
              if(err) console.error(err);
              res.redirect("/");
            });
          });
        }
      })
      break;
    }
    default: {
      res.send({ default: true });
      break;
  }
  }
})

/* 
console.log("discipline", discipline);
      Fellowships.findOne({
        parentId: null,
        link: discipline
      }, (err, d) => {
        if(err){
          res.send({err});
        }
        if (d){
          d.appendChild({
            name: field,
            link: `/${type + 's'}/${discipline}/pages/${field.replace(/\s+/g, '-').toLowerCase()}`,
            location: location,
            title: title, term: term,
            link: link, price: price,
            notes: notes
          })
          res.send({created: true});
        } else{
            let newF = Fellowships.create({
            name: type,
            link: type
            });
            newF.save( (err, d) => {
              d.appendChild({
                name: field,
                link: `/${type + 's'}/${discipline}/pages/${field.replace(/\s+/g, '-').toLowerCase()}`,
                location: location,
                title: title, term: term,
                link: link, price: price,
                notes: notes
              })
            })
          res.send({ found: false, created: true });
          }
      })
    }
*/

module.exports = router;
