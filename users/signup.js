const mongoose = require('mongoose');

const User = require('./user');
const mailer = require('./mailer');
const config = require('../config');

const db_url = require('../secrets').db_url || process.env.DB_URL;

mongoose.connect(db_url);

const signup = function(email, name, mobile, regno, callback){
  const newUser = new User({
    email: email,
    name: name,
    mobile: mobile,
    regno: regno
  });
  console.log(newUser);
  newUser.save(err => {
    //console.log('trying to save');
    if(err) return callback(err);
    //console.log('user saved');
    mailer.sendMail(email, callback);
  });
}

exports.signup = signup;
