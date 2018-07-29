const mongoose = require("mongoose");
const Schema = require("../db/schema");

const Store = mongoose.model("Store", Schema.StoreSchema);

module.exports = Store;
