const path = require('path');
var express = require('express')
var app = express()

app.get('/', function (req:any, res:any) {
    res.send('Hello World, Bamboo!\n')
})

// Export server for testing.
var server = app.listen(3000);
module.exports = server;