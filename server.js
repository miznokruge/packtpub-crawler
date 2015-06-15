/*
  // setup project
  npm init
  npm install connect serve-static --save
  npm install

  // run dev
  node server.js
*/

var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static');

var PATH = __dirname + '/public-dev';
var PORT = 8080;

var app = express();

// logger
app.use(morgan('dev'));

app.use(serveStatic(PATH)).listen(PORT, function() {
  console.log("listening on port " + PORT);
});
