var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOveride = require('method-override');

mongoose.connect('mongodb://node:nicoflojo:Sugarshow1@jello.modulusmongo.net:27017/evyzy7jU');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOveride());

app.listen(2013);
console.log("App listening on port 2013");
