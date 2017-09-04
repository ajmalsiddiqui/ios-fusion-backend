const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const Post = require('./post');

const getAllPosts = function(callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Post.find({}, (err, posts) => {
      if(err) return callback(err);
      if(!posts) return callback("error: no posts found");
      callback(null, posts);
    });
  });
}

const getPostsByTags = function(tags, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Post.find({ tags: { $all: tags } }, (err, posts) => {
      if(err) return callback(err);
      if(!posts) return callback("error: no posts found");
      callback(null, posts);
    });
  });
}

const getPostsByUserId = function(userId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Post.find({ user: userId }, (err, posts) => {
      if(err) return callback(err);
      if(!posts) return callback("error: no posts found");
      callback(null, posts);
    });
  });
}

const getPostByPostId = function(postId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Post.findOne({ _id: postId }, (err, post) => {
      if(err) return callback(err);
      if(!post) return callback("error: no post found");
      callback(null, post);
    });
  });
}

module.exports = {
  'getPostByPostId': getPostByPostId,
  'getPostsByUserId': getPostsByUserId,
  'getPostsByTags': getPostsByTags,
  'getAllPosts': getAllPosts
}
