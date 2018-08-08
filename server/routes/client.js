const express = require('express');
const client = express.Router();
const path = require('path');


/* GET home page. */
client.get('/', function (req, res) {
  res.send('hello');
});

module.exports = client;
