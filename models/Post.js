const mongoose = require('mongoose')
const postSchema = require('../db/schemas/postSchema')

const Post = mongoose.model('post', postSchema)

module.exports = Post