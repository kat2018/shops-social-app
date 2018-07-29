const Schema = require('mongoose').Schema

const PostSchema = new Schema({
  userComment: {
    type: String,
    require: true
  },
  userSharedImageOfStore: {
    type: String,
    require: false
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
},
  {
    timeStamps: {}
  }
);

module.exports = PostSchema