const newPost = require('./new-post');
const getPosts = require('./get-posts');
const likePost = require('./like-post');

module.exports = {
  'makePost': newPost.makePost,
  'getAllPosts': getPosts.getAllPosts,
  'getPostsByTags': getPosts.getPostsByTags,
  'getPostsByUserId': getPosts.getPostsByUserId,
  'getPostByPostId': getPosts.getPostByPostId,
  'likePost': likePost.likePost
}
