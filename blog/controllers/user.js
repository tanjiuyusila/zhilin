var User_model = require('../models/user_model.js');
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

// 验证用户名是否存在
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
                callback(error,data)
            })
        },
        function (data,callback) {
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
        if(error) throw error;
        console.log(results)
    });
    */

/*  链接数据库，插入数据的方法。要写在models里面
    User_model.insert_data(name,pass,function (error,data) {
        console.log(data);
        if(data.affectedRows == 1){
              res.redirect('/login');
        }
    })*/
};

//实缴判断用户名是否存在
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

    User_model.sel_data(name,pass,function (error,data) {
        console.log(data);
    })
};