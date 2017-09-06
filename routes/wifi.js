const express = require('express');
const bodyParser = require('body-parser');

const wifi = require('../wifi/index');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/getCoupon/:regno', (req, res) => {
  wifi.getCoupon(req.params.regno, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.post('/add', (req, res) => {
  wifi.addCoupon(req.body.regno, req.body.username, req.body.password, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  })
});

module.exports = router;
