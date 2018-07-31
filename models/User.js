const mongoose = require("mongoose");
const Schema = require("../db/schema");

const UserModel = mongoose.model("User", Schema.UserSchema);


module.exports = UserModel;
