const Schema = require("mongoose").Schema;

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true]
        },
        email: {
            type: String
        },
        age: {
            type: Number,
            min: [18, 'Must be 18 to post'],
            required: [true]
        },
        photoUrl: {
            type: String,
            default: 'https://cdn2.vectorstock.com/i/1000x1000/46/41/shopping-girl-vector-1224641.jpg'
        },
        stores: [StoreSchema]
    },
    {
        timeStamps: {},
    })

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

const UserSchema = mongoose.model('User', UserSchema)
const StoreSchema = mongoose.model('Store', StoreSchema)
const PostSchema = mongoose.model('Post', PostSchema)

module.exports = {
    PostSchema,
    StoreSchema,
    UserSchema
}