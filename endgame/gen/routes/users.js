// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practicekro")

const userschema = mongoose.Schema({
  username : String,
  name : String,
  age : Number
})

module.exports = mongoose.model("user", userschema) // user name of export

// local host = 127.0.0.1 and default port of monodb and database = practicekro
// the above command connect mongodb to node and create database practicekro

// schema is like apko btana hoga ki baane waleh har document mai kya kya hoga

// Now we will create, insert , update, delete using these models in index.js