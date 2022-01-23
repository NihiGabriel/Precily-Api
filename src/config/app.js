const path = require('path')
const express = require('express');
const { config } = require('dotenv');
const bodyParser = require('body-parser')

const errorHandler = require('../middlewares/error.mw');

config();

// route files
const v1Routers = require('../routes/v1/routes.router');

const app = express();

//set the view engine
app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json 
app.use(bodyParser.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Mount Routers
app.get('/', (req, res, next) => {

    res.status(200).json({
      status: 'success',
      data: {
        name: 'user',
        version: '0.1.0'
      }
    })
    
  });
  
  app.use('/api/user/v1', v1Routers);
  
  // error handler must be after you mount routers
  app.use(errorHandler);
  
  module.exports = app;
