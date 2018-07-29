const mongoose = require("mongoose");
const StoreSchema = require("../db/schema");

const StoreSchema = mongoose.model("Store", StoreSchema);

module.exports = StoreSchema;
