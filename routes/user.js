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

router.get('/getDetails/:userId', (req, res) => {
  users.getDetails(req.params.userId, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.get('/getLikedPosts/:userId', (req, res) => {
  users.getLikedPosts(req.params.userId, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.get('/getUserQr/:userId', (req, res) => {
  users.getUserQr(req.params.userId, (err, rqstream) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else {
      res.setHeader('Content-disposition', 'attachment; filename=' + req.body.type);
      res.setHeader('Content-type', 'image/png');
      qrStream.pipe(res);
    }
  });
});


router.post('/signup', (req, res) => {
  users.signup(req.body.email, req.body.name, req.body.mobile, req.body.regno, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    if(info) res.json({'status': true, 'message': info.toString()});
  })
});

module.exports = router;
