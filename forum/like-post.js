const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Post = require('./post');

const User = require('../users/user');

const likePost = function(postId, userId, callback){
  User.findOne({_id: userId}, (err, user) => {
    if(err) return callback(err);
    if(!user) return callback("error: no user with this userId exists");
    Post.findOne({_id: postId}, (err, post) => {
      if(err) return callback(err);
      if(!post) return callback("error: no post with this postId exists");
      post.likes += 1;
      post.likedBy.push(userId);
      user.likedPosts.push(postId);
      post.save(err => {
        if(err) return callback(err);
        user.save(err => {
          if(err) return callback(err);
          callback(null, "successfully liked post");
        });
      });
    });
  });
}

exports.likePost = likePost;
