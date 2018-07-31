const mongoose = require('mongoose');
const Schema = mongoose.Schema


const PostSchema = new Schema({
    userComment: {
      type: String,
      require: true
    },
    userSharedImageOfStore: {
      type: String,
      require: false
    }
  },
  {
    timeStamps: {
      type: Date
    }
  });

const StoreSchema = new Schema({
    storeName: {
        type: String,
        required: true
    },
    storeDescription: {
        type: String,
        required: false
    },
    userPosts: [PostSchema]
})

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true]
    },
    email: {
      type: String,
      unique: [true]
    },
    age: {
      type: Number,
      min: [18, "Must be 18 to post"],
      required: [true]
    },
    photoUrl: {
      type: String,
      default:
        "https://cdn2.vectorstock.com/i/1000x1000/46/41/shopping-girl-vector-1224641.jpg"
    },
    userPosts: [PostSchema]
  },
  {
    timeStamps: {
      type: Date
    }
  }
);

const PostModel = mongoose.model("Post", PostSchema);
const StoreModel = mongoose.model("Store", StoreSchema);
const UserModel = mongoose.model('User', UserSchema)



module.exports = {
    PostModel,
    StoreModel,
    UserModel
}