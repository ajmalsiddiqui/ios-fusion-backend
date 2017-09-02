const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const Refreshment = require('./refreshment');
const generateQr = require('../generate-qr');
const config = require('../config');

const newRefreshment = function(type, userId, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;
    if(err) console.log(err);
    mongoose.connect(db_url);

    const refreshment = new Refreshment({
      type: type,
      user: userId
    });

    refreshment.save(err => {
      if(err) return callback(err);
      //callback arguments: err and png stream
      callback(null, generateQr.generateQr(refreshment));
    });
  });
}

exports.newRefreshment = newRefreshment;
