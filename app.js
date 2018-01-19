var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
var fs = require('fs')

var app = express();

// 添加配置文件
var config = require('config.json')('./config.json')

// express 中间件设置
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 请求设置并支持跨域
var corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
var doApi = require('./routes/do')
// var otherApi = require('./routes/other')
app.use('/', doApi)
app.use('/do', doApi)
// app.use('/other', otherApi)

// 异常处理
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
  console.log(err)
});

module.exports = app;
