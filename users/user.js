const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  regno: {
    type: String,
    required: true,
    unique: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  posts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post'
  },
  likedPosts: {
    type: [Schema.Types.ObjectId],
    ref: 'Post'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
