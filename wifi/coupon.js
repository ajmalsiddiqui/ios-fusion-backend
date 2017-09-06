const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const couponSchema = new Schema({
  regno: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
