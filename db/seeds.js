require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const { PostModel,
    StoreModel,
    UserModel } = require('./schema')

// const Post = require("../models/Post");
// const Store = require("../models/Store");
// const User = require("../models/User");

mongoose.connection.once("open", () => {
  console.log(`Mongoose Connected to MongoDB`);
});

mongoose.connection.on("error", error => {
  console.error(`
    MongoDB connection error!
    ${error}
    `);
  process.exit(-1);
});

//Clear the database of existing posts
PostModel.remove({})
    .then(() => {
        console.log('All posts deleted!')
    })
    .catch((error) => {
        console.log(error)
    })

//Clear the database of existing stores
StoreModel.remove({})
    .then(() => {
        console.log('All stores deleted!')
    })
    .catch((error) => {
        console.log(error)
    })

//Clear the database of existing users
UserModel.remove({})
    .then(() => {
        console.log('All users deleted!')
    })
    .catch((error) => {
        console.log(error)
    })

//Generate instances of Users and their posts

const post1 = new PostModel({
    userComment: "This is like a candy store! My niece loved it here!",
    userSharedImageOfStore:
        "https://aredlipandanudeshoe.files.wordpress.com/2015/03/sephora-selfie.jpg"
});

const post2 = new PostModel({
    userComment: "Fancy",
    userSharedImageOfStore:
        "https://i.ytimg.com/vi/jhM-cFNIknA/maxresdefault.jpg"
});

const posts = [post1, post2]

const sephora = new StoreModel({
    storeName: "Sephora",
    storeDescription: "Makeup and Skincare",
    userPosts: [posts]
});

const lululemon = new StoreModel({
    storeName: "lululemon",
    storeDescription: "Yoga gear",
    userPosts: [posts]
});

const hopschicken = new StoreModel({
    storeName: "Hops Chicken",
    storeDescription: "best chicken bisquit",
    userPosts: [posts]
})

const stores = [sephora, lululemon, hopschicken]

const betty = new UserModel({
      userName: "betty white",
      email: "betty@w.io",
      age: "96",
      photoUrl:
        "https://nyppagesix.files.wordpress.com/2018/07/betty-white.jpg?quality=90&strip=all",
      userPosts: [posts, stores]
    })

const brad = new UserModel({
    userName: "brad pitt",
      email: "brad@p.io",
      age: "54",
      photoUrl:
        "http://www.mybelleelle.com/wp-content/uploads/2016/11/image-8-e1478807987264.jpeg",
      userPosts: [posts, stores]
})

const users = [betty, brad]

UserModel.insertMany(users)
    .then(() => {
    console.log(`Added ${users.length} users to database`)
})
    .catch(error => {
    console.log("!!!!! ERROR SAVING SEEDED DATA !!!!!");
    console.log(error);
  })
    .then(() => {
    mongoose.connection.close();
    console.log(`
      Finished seeding database... 
      Disconnected from MongoDB
    `);
  });
