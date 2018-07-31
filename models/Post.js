const mongoose = require('mongoose')
const Schema = require('../db/schema')

const PostModel = mongoose.model("Post", Schema.PostSchema);

module.exports = PostModel