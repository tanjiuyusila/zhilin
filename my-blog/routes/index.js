var express = require('express');
var router = express.Router();
var User = require('../controllers/user.js');
var Blog = require('../controllers/blog.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function checkLogin(req,res,next){
    if(req.session.USER_ID){
        next();
    }else{
        res.redirect("/")
    }
}

router.post('/reg',User.do_reg);
router.get('/reg',User.reg);
router.get('/login',User.login);
router.post('/login',User.do_login);
router.post('/checkname',User.checkname);

router.get('/index',checkLogin);
router.get('/index',Blog.index);

router.get('/unlogin',User.unlogin);

//渲染发表博客界面
router.get('/add',Blog.add);
//post提交博客
router.post('/add',Blog.do_add);
//分类管理
router.get('/blogCatalogs',Blog.Catalog);
//添加分类
router.post('/addBlogCatalog',Blog.addBlogCatalog);
//更新博客
router.get('/update',Blog.update);
router.post('/update',Blog.do_update);




module.exports = router;
