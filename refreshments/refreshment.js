const mongoose = require('mongoose');

const config = require('../config');

const Schema = mongoose.Schema;

const refreshmentSchema = new Schema({
  type: {
    type: String,
    //enum: config.refreshment_types,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  claimed: {
    type: Boolean,
    default: false
  }
});

const Refreshment = mongoose.model('Refreshment', refreshmentSchema);

module.exports = Refreshment;
