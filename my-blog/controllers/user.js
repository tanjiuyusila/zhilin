var User_model = require('../models/user_model.js');

exports.reg = function (req,res,next) {
    res.render('reg')
};
exports.do_reg = function (req,res,next) {
    var name = req.body.email;
    var pass = req.body.pwd;

    User_model.insert_data(name,pass,function (err,data) {
        // console.log(data);
        if(data.affectedRows > 0){
            res.redirect('/login');
        }
    })
};
exports.checkname = function (req,res,next) {
    var name = req.body.value;
    User_model.checkname(name,function (err,data) {
        if(data.length > 0){
            res.send('success');
        }else{
            res.send('error');
        }
    })
};
exports.login = function (req,res,next) {
    res.render('login');
};
exports.do_login = function (req,res,next) {
    var name = req.body.email;
    var pass = req.body.pwd;
    User_model.sel_name_by_pass(name,pass,function (err,data) {
        console.log(req.session);
        if(data.length > 0){
            // console.log(data);
            req.session = data[0];
            // console.log(req.session);
            res.redirect('/index');
        }
    })
};

exports.unlogin = function (req,res,next) {
    req.session = null;
    res.redirect('/index');
};


