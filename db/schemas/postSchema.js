const Schema = require('mongoose').Schema

const PostSchema = new Schema({
    postComment: {
        type: String,
        require: true
    }, 
    userSharedImageOfStore: {
        type: String,
        require: false
    } 
})

module.exports = PostSchema