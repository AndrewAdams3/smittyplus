var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var materializedPlugin = require('mongoose-materialized');

//Define a schema
var Schema = mongoose.Schema;

var FellowshipsSchema = new Schema({
  name: {
    type: String,
    default: "",
    required: true
  },
  link: {
    type: String,
    default: "",
    required: true
  }
});

FellowshipsSchema.plugin(materializedPlugin);
var Fellowships = mongoose.model('Fellowships', FellowshipsSchema);

module.exports = Fellowships;