var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send("Sample Code for RESTful API");
})
var server = app.listen(8080, function(){
  var port = server.address().port

  console.log("Sample Code for RESTful API rin at", port);
})

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.post('/addUser', function (req, res) {
  var json = req.body;
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user5"] = json;
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.post('/addMultiUser', function (req, res) {
  var json = req.body;
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["MulUser"] = json;
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

// var id = 2;

app.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   // var id = req.params;
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user"+req.params.id];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.get('/showbyID/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user"+req.params.id]
      console.log( user );
      res.end( JSON.stringify(user));
   });
})
