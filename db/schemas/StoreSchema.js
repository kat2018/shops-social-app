const Schema = require('mongoose').Schema

const StoreSchema = new Schema({
    storeName: {
        type: String,
        require: true
    },
    storeDescription: {
        type: String,
        require: false
    }
})

module.exports = StoreSchema