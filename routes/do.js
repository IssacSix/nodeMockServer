var express = require('express');
var router = express.Router();
var config = require('config.json')('./config.json');
var Mock = require('mockjs')

// 登录模块
var login = require('../controller/login.js');

router.get('/do/1000', login.getCode);

module.exports = router;