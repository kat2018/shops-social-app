const mongoose = require("mongoose");
const UserSchema = require("../db/schema");

const UserSchema = mongoose.model("User", UserSchema);


module.exports = UserSchema;
