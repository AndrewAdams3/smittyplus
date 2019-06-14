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
  }
});

FellowhsipSchema.plugin(materializedPlugin);
var Fellowship = mongoose.model('fellowship', FellowhsipSchema);

module.exports = Fellowship;