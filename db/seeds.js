require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const { PostModel, StoreModel, UserModel} = require('./schema')

//Users
const Betty = new UserModel({
    userName: 'betty white',
    email: 'betty@w.io',
    age: '96',
    photoUrl: 'https://nyppagesix.files.wordpress.com/2018/07/betty-white.jpg?quality=90&strip=all',
    stores: [lululemon, sephora]
})

//Stores
const lululemon = new StoreModel({
    storeName: 'lululemon',
    storeDescription: 'Yoga gear',
    userPosts: [PostSchema]
})

const sephora = new StoreModel({
  storeName: "Sephora",
  storeDescription: "Makeup and Skincare",
  userPosts: [PostSchema]
});

//Posts
const postSephora = new PostModel({
    userComment: 'This is like a candy store! My niece loved it here!',
    userSharedImageOfStore: 'https://aredlipandanudeshoe.files.wordpress.com/2015/03/sephora-selfie.jpg',
    date: 02/02/2018
})



