const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./user');

const getDetails = function(userId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    User.findOne({_id: userId}, (err, user) => {
      if(err) return callback(err);
      if(!user) return callback("error: no user with this userId exists");
      callback(null, JSON.stringify(user));
    });
  });
}

exports.getDetails = getDetails;
