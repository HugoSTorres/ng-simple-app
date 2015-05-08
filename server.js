var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('public'));

app.get('/posts', function(req, res) {
  console.log("GET /posts");
  
  fs.readFile('./data.json', function(err, data) {
    if (err) {
      res.statusCode = 500;
      res.send("Error connecting to the database");
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("simple-app server listening at http://%s:%s", host, port);
});
