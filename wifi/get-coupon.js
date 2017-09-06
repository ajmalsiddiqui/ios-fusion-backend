const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Coupon = require('./coupon');

const getCoupon = function(regno callback){
  fs.access(path.normalize(__dirname + '/../secrets.js'), err => {
    const db_url = !err ? require('../secrets').db_url : process.env.DB_URL;

    mongoose.connect(db_url);

    Coupon.findOne({regno: regno}, (err, coupon) => {
      if(err) return callback(err);
      if(!coupon) return callback("error: no coupon for given regno");
      callback(null, coupon);
    });
  });
}

exports.addCoupon = addCoupon;
