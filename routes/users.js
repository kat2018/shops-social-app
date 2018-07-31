var express = require('express');
const UserModel = require('../models/User.js')
var router = express.Router();

router.get('/', function (req, res, next){
  UserModel.find()
  .then((users)=>{
    res.send(users)
  })
})

module.exports = router
