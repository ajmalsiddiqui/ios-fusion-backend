const express = require('express');
const bodyParser = require('body-parser');

const forum = require('../forum/index');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/new', (req, res) => {
  forum.makePost(req.body.content, req.body.userId, req.body.tags || [], (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.get('/getAll', (req, res) => {
  forum.getAllPosts((err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.get('/byUser/:userId', (req, res) => {
  forum.getPostsByUserId(req.params.userId, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.get('/byPost/:postId', (req, res) => {
  forum.getPostByPostId(req.params.postId, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

router.post('/byTags', (req, res) => {
  forum.getPostsByTags(req.body.tags, (err, info) => {
    if(err) res.json({'status': false, 'message': err.toString()});
    else res.json({'status': true, 'message': info.toString()});
  });
});

module.exports = router;
