const signup = require('./signup');
const markVerified = require('./mark-verified');
const getDetails = require('./get-details');
const likedPosts = require('./liked-posts');
const getQr = require('./get-qr');

module.exports = {
  'signup': signup.signup,
  'markVerified': markVerified.markVerified,
  'getDetails': getDetails.getDetails,
  'getLikedPosts': likedPosts.getLikedPosts,
  'getUserQr': getQr.getUserQr
}
