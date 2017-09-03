const User = require('./user');

const markVerified = function(userId, callback){
  User.findOne({_id: userId}, (err, user) => {
    if(err) return callback(err);
    if(user.verified) return callback("error: This user has already been verified.");
    user.verified = true;
    user.save(err => {
      if(err) return callback(err);
      callback(null, "successfully verified user");
    });
  });
}

exports.markVerified = markVerified;
