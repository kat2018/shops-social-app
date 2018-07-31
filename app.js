require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const logger = require('morgan');
const mongoose = require('mongoose');


mongoose.Promisse = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/shops-social-app

const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose Connected Successfully");
});
//error catcher
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts/posts_controller");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.use(express.static(__dirname + "/client/build/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

module.exports = app;