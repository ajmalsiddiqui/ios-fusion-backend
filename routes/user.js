const express = require('express');
const bodyParser = require('body-parser');

const users = require('../users/index');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/markVerified/:userId', (req, res) => {
  users.markVerified(req.params.userId, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.post('/signup', (req, res) => {
  users.signup(req.body.email, req.body.name, req.body.mobile, req.body.regno, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    if(info) res.json({'status': true, 'message': info.toString()});
  })
});

module.exports = router;
