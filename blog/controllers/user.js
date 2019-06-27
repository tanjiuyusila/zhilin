var User_model = require('../models/user_model.js');

exports.reg = function (req,res,next) {
    res.render('reg')
};

exports.do_reg = function (req,res,next) {
    var name = req.body.uname;
    var pass = req.body.pass;

//    链接数据库，插入数据的方法。要写在models里面
    User_model.insert_data(name,pass,function (error,data) {
        console.log(data);
        if(data.affectedRows == 1){
              res.redirect('/login');
        }
    })
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