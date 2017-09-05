const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./user');

const getLikedPosts = function(userId, callback){
  User.findOne({_id: userId}, (err, user) => {
    if(err) return callback(err);
    if(!user) return callback("error: no user with given userId exists");
    callback(null, user.likedPosts.toString());
  });
}

exports.getLikedPosts = getLikedPosts;
