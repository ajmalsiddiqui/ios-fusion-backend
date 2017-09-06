const getCoupon = require('./get-coupon');
const addCoupon = require('./add-coupon');

module.exports = {
  'addCoupon': addCoupon.addCoupon,
  'getCoupon': getCoupon.getCoupon
}
