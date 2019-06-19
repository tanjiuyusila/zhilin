//创建控制器规则：有一张数据库表，创建一个控制器
//如何让index.js调用user下的方法：将方法暴露出去

var User_model = require('../models/user_model.js');

exports.reg = function (req,res,next) {
    res.render('reg',{
        'num':123,
        'posts':[{id:1,name:'yzl'},{id:2,name:'yzy'}]
    });
};

exports.do_reg = function (req,res,next) {
    var name = req.body.uname;
    var pass = req.body.pass;
    console.log(name,pass);
    //控制器想要拿到model的数据，要用回调函数
    User_model.insert_data(name,pass,function (error,data) {
        console.log(data);
    });
    // User_model.sel_login_data(name,pass,function (error,data) {
    //     console.log(data);
    // })
};