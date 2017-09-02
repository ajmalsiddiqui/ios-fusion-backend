const express = require('express');
const bodyParser = require('body-parser');

const refreshments = require('../refreshments/index');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new', (req, res) => {
  refreshments.newRefreshment(req.body.type, req.body.userId, (err, qrStream) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else qrStream.pipe(res);
  })
});

module.exports = router;
