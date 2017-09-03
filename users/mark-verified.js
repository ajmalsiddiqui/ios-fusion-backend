const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./user');

const markVerified = function(userId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    User.findOne({_id: userId}, (err, user) => {
      if(err) return callback(err);
      if(!user) return callback("error: no user with this user id exists");
      if(user.verified) return callback("error: This user has already been varified");
      user.verified = true;
      user.save(err => {
        if(err) return callback(err);
        callback(null, "successfully verified user");
      });
    });
  });
}

exports.markVerified = markVerified;
