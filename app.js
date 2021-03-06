// libraries section
var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
//////////////////////////////////
//////////////////////////////////
// view engine setup section
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//////////////////////////////////////////
///////////////////////////////////////////


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);
////////////////////////////////////////////////
//////////////////////////////////////////////////





// controllers section
var index = require("./controllers/index");
////////////////////////////////////////////
////////////////////////////////////////////
app.use('/',index);

server.listen(3000);

////  if use request not available controller
app.use(require('./middlewares/error'));