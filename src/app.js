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

const homeController = require("./controller/homeController");
const aboutController = require("./controller/aboutController");
const blogController = require("./controller/blogController");
const termController = require("./controller/termController");
const policyController = require("./controller/policyController");
const loginController = require("./controller/loginController");
const signupController = require("./controller/signupController");
const compController = require("./controller/compController");

/**
 * Routes MiddleWare
 */
app.use("/", homeController);
app.use("/about", aboutController);
app.use("/blog", blogController);
app.use("/term", termController);
app.use("/policy", policyController);
app.use("/comp", compController);
app.use("/login", loginController);
app.use("/register", signupController);


//Admin Riutes

const adminHomeController = require("./admincontroller/adminHomeController");
const adminCompController = require("./admincontroller/adminCompController");
const adminBlogController = require("./admincontroller/adminBlogController");
const adminImageController = require("./admincontroller/adminImageController");

const postController = require("./controller/postController");
const imageController = require("./controller/imageController");
const categoryController = require("./controller/categoryController");
const artistController = require("./controller/artistController");

//Admin Routes
app.use("/admin/home", adminHomeController);
app.use("/admin/comp", adminCompController);
app.use("/admin/blog", adminBlogController);
app.use("/admin/image", adminImageController);
app.use("/setup/comp", postController);
app.use("/setup/image", imageController);
app.use("/setup/category", categoryController);
app.use("/setup/artist", artistController);


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
