var express = require('express');
const PostModel = require("../../models/Post.js");

var router = express.Router();

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
  res.send('posts', {title: "Posts"});
});

module.exports = router
