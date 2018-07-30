require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
const Post = require('../models/Post')
const Store = require('../models/Store')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () =>{
    console.log(`Mongoose Connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!
    ${error}
    `)
    process.exit(-1)
})


//Users
User.remove({}).then(() => {
    const betty = new User({
        userName: 'betty white',
        email: 'betty@w.io',
        age: '96',
        photoUrl: 'https://nyppagesix.files.wordpress.com/2018/07/betty-white.jpg?quality=90&strip=all',
        stores: []
    })
    const sephora = new Store({
      storeName: "Sephora",
      storeDescription: "Makeup and Skincare",
      userPosts: [Post]
    });

    //Posts
    const postSephora = new Post({
        userComment: 'This is like a candy store! My niece loved it here!',
        userSharedImageOfStore: 'https://aredlipandanudeshoe.files.wordpress.com/2015/03/sephora-selfie.jpg',
        date: 02 / 02 / 2018
    })
    sephora.userPosts.push(postSephora)

    const lululemon = new Store({
        storeName: 'lululemon',
        storeDescription: 'Yoga gear',
        userPosts: [Post]
    })
    const postLululemon = new Post({
      userComment: "Fancy",
      userSharedImageOfStore:
        "https://i.ytimg.com/vi/jhM-cFNIknA/maxresdefault.jpg",
      date: 02 / 02 / 2018
    });
    // lululemon.stores.push(lululemon)
    // postLululemon.posts.push(postLululemon)
    return betty.save()
    }).then(() => {
        return User.create({
          userName: "brad pitt",
          email: "brad@p.io",
          age: "54",
          photoUrl:
            "http://www.mybelleelle.com/wp-content/uploads/2016/11/image-8-e1478807987264.jpeg",
          stores: [lululemon, sephora]
        })
    }).then((brad) => {
        const hopschicken = new Store({
            storeName: "Hops Chicken",
            storeDescription: "best chicken bisquit",
            userPosts: [Post]
        })
        brad.stores.push(hopschicken)
        return gob.save()
    }).catch((error) => {
        console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
    })












