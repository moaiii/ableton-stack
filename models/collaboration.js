var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  song: {
    newSong: {
      type: boolean,
      required: true
    },
    soundcloudUrl: {
      type: String,
      required: false
    },
    songId: {
      type: String,
      required: true
    }
  },
  collaborator: {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    requested: {
      type: String,
      required: true
    }
  },
  collaboratee: {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    accepted: {
      type: String,
      required: true
    }
  },
  communications: [{
    type: Strings,
    required: false
  }]
});

module.exports = mongoose.model('Collaboration', schema);
