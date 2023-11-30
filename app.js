require('dotenv').config();
require('./config/database').connect();
const path      = require('path');
const express   = require('express');
const app       = express();
const { ADMIN_PATH } = process.env

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
//Global varialble
app.locals.ADMIN_PATH = ADMIN_PATH;

// API Controller
app.get('/', require('./controllers/HomeController').view);
app.get('/signin', require('./controllers/LoginController').signin);
app.get('/signup', require('./controllers/LoginController').signup);
app.get(`/${ADMIN_PATH}`,require('./controllers/Admin/AdminController').view);
// Employee
app.get(`/${ADMIN_PATH}/employee-list`,require('./controllers/Admin/EmplyeeController').view)
module.exports = app;