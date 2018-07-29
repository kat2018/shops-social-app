const mongoose = require('mongoose')
const PostSchema = require('../db/schema')

const PostSchema = mongoose.model("Post", PostSchema);

module.exports = PostSchema