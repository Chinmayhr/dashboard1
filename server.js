var express = require('express');
var app = express();
var http = require('http');


app.use("/", express.static(__dirname + '/dist'));

app.use("/", express.static(__dirname + '/www'));

var httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 9000);
console.log("Listen PORT: ", process.env.PORT || 9000);