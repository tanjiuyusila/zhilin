var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//注册:
router.get('/reg',User.reg);
//
router.post('/reg',User.do_reg);
//渲染登录界面
router.get('/login',User.login);
//登录
router.post('/login',User.do_login);
//失焦判断用户名是否存在
router.post('/check',User.check);

module.exports = router;

