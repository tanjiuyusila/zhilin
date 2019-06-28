var User_model = require('../models/user_model.js');
var Blog_model = require('../models/blog_model.js');
var async = require('async');
const crypto = require('crypto');


exports.reg = function (req,res,next) {
    res.render('reg')
};

exports.do_reg = function (req,res,next) {
    var name = req.body.uname;
    var pass = req.body.pass;
    var hash = crypto.createHash('md5');
    hash.update(pass);
    var mpass = hash.digest('hex');

//注册验证用户名是否存在,md5加密
    User_model.checkname(name,function (error,data) {
        // console.log(data)
        if(data.length > 0){
            res.redirect('/reg');
        }else{
            // 链接数据库，插入数据的方法。要写在models里面
            User_model.insert_data(name,mpass,function (error,data) {
                console.log(data);
                if(data.affectedRows == 1){
                    res.redirect('/login');
                }
            })
        }
    });

/*验证用户名是否存在：瀑布流,解决回调深渊，npm install async
    async.waterfall([
        function (callback) {
            User_model.checkname(name,function (error,data) {
                callback(null,data) //data当作参数，传到下一个函数
            })
        },
        function (data,callback) {  //这个data就是上一个callback的data
            if(data.length > 0){
                res.redirect('/reg');
            }else{
                // 链接数据库，插入数据的方法。要写在models里面
                User_model.insert_data(name,pass,function (error,data) {
                    console.log(data);
                    if(data.affectedRows == 1){
                        res.redirect('/login');
                    }
                })
            }
        }
    ],function (error,results) {
        console.log(results)
    });
*/

/* 验证用户名是否存在，async
    var asyncFunc = function (name) {
        return new Promise(function (resolve,reject) {
            User_model.checkname(name,function (error,data) {
                resolve(data);
            })
        })
    };
    async function asyncFuncNew(name,pass) {
        var data = await asyncFunc(name);
        if(data.length > 0){
            res.redirect('/reg');
        }else{
            User_model.insert_data(name,pass,function (error,data) {
                console.log(data);
                if(data.affectedRows == 1){
                    res.redirect('/login');
                }
            })
        }
    }
    asyncFuncNew(name,pass);
    */

/*  链接数据库，插入数据的方法。要写在models里面
    User_model.insert_data(name,pass,function (error,data) {
        console.log(data);
        if(data.affectedRows == 1){
              res.redirect('/login');
        }
    })*/
};

//判断用户名是否存在
exports.check = function(req,res,next){
    var name = req.body.uname;
    User_model.checkname(name,function (error,data) {
        if(data.length > 0){
            res.send('success');
        }else{
            res.send('error');
        }
    });
};

//登录

// 渲染登录页
exports.login = function (req,res,next) {
    res.render('login')
};

exports.do_login = function (req,res,next) {
    var name = req.body.uname;
    var pass = req.body.pass;
    var hash = crypto.createHash('md5');
    hash.update(pass);
    var mpass = hash.digest('hex');

    User_model.sel_data(name,mpass,function (error,data) {

        if(data.length > 0){
            console.log(data);
            req.session = data[0];
            console.log(req.session);
            res.redirect('/');
        }else{
            res.redirect('/login')
        }
    })
};
exports.unlogin = function (req,res,next) {
    req.session = null;
    res.redirect('/');
};

exports.index = function (req,res,next) {
    Blog_model.sel_all(function (err,data) {
        // console.log(data);
        res.render("index.ejs",{
            "title":"yaozhilin",
            "sess":req.session,
            "blogs":data,
        })
    });
};
//带参数
exports.yy = function (req,res,next) {
    var name = req.params.username;
    console.log(name)
};
exports.zz = function (req,res,next) {
    var qur = req.query.q;
    console.log(qur)
};