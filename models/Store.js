const mongoose = require("mongoose");
const Schema = require("../db/schema");

const StoreModel = mongoose.model("Store", Schema.StoreSchema);

module.exports = StoreModel;
