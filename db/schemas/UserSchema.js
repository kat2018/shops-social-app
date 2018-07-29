const Schema = require("mongoose").Schema;

const UserSchema = new Schema(
{
    userName: {
        type: String,
        required: [true]
    },
    email:{
        type: String
    },
    age:{
        type: Number,
        min: [18, 'Must be 18 to post'],
        required: [true]
    },
    photoUrl: {
        type: String,
        default: 'https://cdn2.vectorstock.com/i/1000x1000/46/41/shopping-girl-vector-1224641.jpg'
    },
    stores: [ StoreSchema ]
},
{
    timeStamps: {},
}
)

module.exports = UserSchema