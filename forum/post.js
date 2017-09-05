const mongoose = require('mongoose');

const config = require('../config');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  tags: {
    type: [String]
  },
  likes: {
    type: Number,
    default: 0
  },
  likedBy: {
    type: [Schema.Types.ObjectId],
    ref: 'User'
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
