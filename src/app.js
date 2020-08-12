require('express-async-errors');
require('hbs');
require("./appDbContext");


const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

/**
 * View Engine SetUp
 */
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

app.set('view engine', 'hbs');
app.set("views", viewsPath);

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

const postController = require("./controller/postController");
const imageController  =require("./controller/imageController");

/**
 * Routes MiddleWare
 */

app.use("/", postController);
app.use("/image", imageController);


/**
 * Not Found Error Catch
 */

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("Routes Not Match");
  next(error);
});

/**
 * Error Handlers
 */

if (app.get('env') === 'production') {
  app.use((error, req, res, next) => {
      res.status(req.status || 500);
      res.send({
          status: req.status || 500,
          message: error.message
      });
  });
}

app.use((error, req, res, next) => {
  res.status(req.status || 500);
  res.send({
      status: req.status || 500,
      message: error.message,
      stack: error.stack
  });
});

module.exports = app;
