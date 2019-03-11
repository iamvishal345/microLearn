var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('express-error-handler'); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken');
var router = require('./routes/routing');
const helmet = require('helmet');
var cors = require('cors')
require('dotenv').config();

var app = express();
app.use(cors());
// app.use(helmet());
// app.use(helmet.noCache());
// app.use(helmet.frameguard());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',router);
// app.use('/', indexRouter);
// app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
handler = errorHandler({
  handlers: {
    '404': () => {
      console.log("404 Not found Error Detected!");
    },
    '500': () => {
      console.log("500 Internal Server Error Detected!");
    },
    '403': () => {
      console.log("403 Forbidden Error Detected!");
    },
    '400': () => {
      console.log("400 Bad request error!");
    }
  }
});
app.use(errorHandler.httpError(400)); 
app.use(handler);

app.listen(8080,()=>{
  console.log('started at 3000');
})
module.exports = app;
