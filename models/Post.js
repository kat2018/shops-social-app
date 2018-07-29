const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Post = mongoose.model("Post", Schema.PostSchema);

module.exports = Post