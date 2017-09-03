const Refreshment = require('./refreshment');

const claimRefreshment = function(refreshmentId, callback){
  Refreshment.findOne({_id: refreshmentId}, (err, refreshment) => {
    if(err) return callback(err);
    if(refreshment.claimed) return callback("error: This refreshment has already been claimed.");
    refreshment.claimed = true;
    refreshment.save(err => {
      if(err) return callback(err);
      callback(null, "successfully claimed refreshment");
    });
  });
}

exports.claimRefreshment = claimRefreshment;
