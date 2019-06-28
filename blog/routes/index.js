var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');
var Blog = require('../controllers/blog.js');

/* GET home page. */

function checkLogin(req,res,next){
  if(req.session){
    next();
  }else{
    res.redirect("/login")
  }
}

router.get('/',checkLogin);//响应主页先响应checkLogin
router.get('/', Blog.index);
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
//登录页注销
router.get('/unlogin',User.unlogin);

//路由带传参
router.get('/xx/:username',User.yy);
router.get('/search',User.zz);


module.exports = router;

