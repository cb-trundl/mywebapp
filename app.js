"use strict";
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!\n');
});
// Export server for testing.
var server = app.listen(3000);
module.exports = server;
