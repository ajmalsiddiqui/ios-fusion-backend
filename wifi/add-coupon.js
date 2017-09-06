const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Coupon = require('./coupon');

const addCoupon = function(regno, username, password, callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    const newCoupon = new Coupon({
      regno: regno,
      username: username,
      password: password
    });

    newCoupon.save(err => {
      if(err) return callback(err);
      //callback arguments: err and png stream
      callback(null, "successfully added coupon");
    });
  });
}

exports.addCoupon = addCoupon;
