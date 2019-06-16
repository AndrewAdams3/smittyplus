var mongoose = require('mongoose');
mongoose.Promise = require('bluebird').Promise;

var materializedPlugin = require('mongoose-materialized');

//Define a schema
var Schema = mongoose.Schema;

var FellowhsipSchema = new Schema({
  name: {
    type: String,
    default: "",
    required: true
  },
  link: {
    type: String,
    default: "",
    required: true
  },
  discipline: {
    type: String,
    required: true
  }, 
  location: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  term: {
    type: String,
    required: false
  }, 
  price: {
    type: Number,
    required: false
  }, 
  notes: {
    type: String,
    required: false
  }
});

FellowhsipSchema.plugin(materializedPlugin);
var Fellowship = mongoose.model('fellowship', FellowhsipSchema);

module.exports = Fellowship;