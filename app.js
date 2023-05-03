"use strict";
const path = require('path');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World Test!\n');
});
// Export server for testing.
var server = app.listen(3000);
module.exports = server;
