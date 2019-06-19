var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');  //日志
var cookieParser = require('cookie-parser');    //数据包解析
var bodyParser = require('body-parser');    //数据包解析

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //set用来设置全局变量
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));  //use用来让函数全局使用
app.use(bodyParser.json());  //解析json
app.use(bodyParser.urlencoded({ extended: false }));   //解析url
app.use(cookieParser());  //处理coolie
app.use(express.static(path.join(__dirname, 'public')));  //处理静态资源管理器，path.join高度静态资源放在那个文件夹，public，即public下文件夹写死，不能改名字

app.use('/', index);//主页是indexjs,从入口文件跳到index.js
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
