var c_10000 = require('../jsons/1000.json')
var Mock = require('mockjs');
var Random = Mock.Random

// 获取验证码 1000
exports.getCode = function (req, res, next) {
    res.json(c_10000)
}