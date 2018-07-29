const mongoose = require("mongoose");
const Schema = require("../db/schema");

const User = mongoose.model("User", Schema.UserSchema);


module.exports = User;
