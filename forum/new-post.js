const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Post = require('./post');

const User = require('../users/user');

const makePost = function(content, userId, tags, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    const newPost = new Post({
      content: content,
      user: userId,
      tags: tags,
      timestamp: new Date()
    });

    User.findOne({_id: userId}, (err, user) => {
      if(err) return callback(err);
      if(!user) return callback("error: no user with given userid found");
      user.posts.push(newPost._id);
      user.save(err => {
        if(err) return callback(err);
        newPost.save(err => {
          if(err) return callback(err);
          callback(null, "post saved to db");
        });
      });
    });
  });
}

exports.makePost = makePost;
