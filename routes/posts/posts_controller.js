var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
  res.send('posts', {title: "Posts"});
});

module.exports = router;
