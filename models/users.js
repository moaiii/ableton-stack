var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueVaidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true
  },
  soundcloudUrl: {
    type: String,
    required: false
  },
  dropboxUrl: {
    type: String,
    required: false
  },
  websiteUrl: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dataJoined: {
    type: Date,
    required: true
  }
});

schema.plugin(mongooseUniqueVaidator);

module.exports = mongoose.model('User', schema);
