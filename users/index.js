const signup = require('./signup');
const markVerified = require('./mark-verified');
const getDetails = require('./get-details');

module.exports = {
  'signup': signup.signup,
  'markVerified': markVerified.markVerified,
  'getDetails': getDetails.getDetails
}
