var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoute = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoURI = 'mongodb://127.0.0.1:27017/crud'; // Replace with your MongoDB connection URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

//mongoose.connect('mongodb://localhost:27017/meanDB',{userMongoClient:true});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoute);
http.createServer(app).listen(port);

console.log("Backend running on port:", port);