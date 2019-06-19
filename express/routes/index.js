var express = require('express');
var router = express.Router();//产生路由对象，后面可以.get操作
var User = require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//把views下静态页面发给浏览器，所有传输都属对象
});
///reg:响应地址，即http://localhost:3000/reg
router.get('/reg',User.reg);
//注册向后端传数据的路由
router.post('/reg',User.do_reg);










module.exports = router;
