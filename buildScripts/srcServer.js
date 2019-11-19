var express = require('express');
var path = require ('path');
var open = require ('open');
var webpack = require ('webpack');
var config = require ('../webpack.config.dev');

var port = 3000;
var app = express();
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bobsmith@gmail.com"},
    {"id": 2, "firstName":"Brenda", "lastName":"Smyth", "email":"bsmyth@gmail.com"},
    {"id": 3, "firstName":"Billy", "lastName":"Smath", "email":"williamsmath@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
