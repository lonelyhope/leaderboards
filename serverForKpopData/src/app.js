// kpop

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();
const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
const mongoose = require("mongoose");

// const mongoose = require('mongoose');


var db;
var azureuri = "mongodb://test:test@ds012538.mlab.com:12538/kp1";
var localuri = "mongodb://localhost:27017/kp1";
mongoose.connect(localuri).then(
  () => { 
    console.log('> DB Connection has been established successfully.');
    app.listen(process.env.PORT || 8082);
    console.log("> running ...");
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
  },
  err => { /** handle initial connection error */ 
    console.error('Unable to connect to the database:', err);
  
  }
);

app.use(morgan('> Combined'));
app.use(bodyParser.json());
app.use(cors());


require('./routes')(app)
 