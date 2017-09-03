const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Refreshment = require('./refreshment');

const claimRefreshment = function(refreshmentId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Refreshment.findOne({_id: refreshmentId}, (err, refreshment) => {
      if(err) return callback(err);
      if(!refreshment) return callback("error: no refreshment with this refreshment id exists");
      if(refreshment.claimed) return callback("error: This refreshment has already been claimed.");
      refreshment.claimed = true;
      refreshment.save(err => {
        if(err) return callback(err);
        callback(null, "successfully claimed refreshment");
      });
    });
  });
}

exports.claimRefreshment = claimRefreshment;
