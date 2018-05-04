const express = require('express');
const client = express.Router();
const path = require('path');

client.use('/',express.static(path.join(__dirname, '../../client/build')));

/* GET home page. */
client.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

module.exports = client;
