/*连接数据库
     1. 数据库引擎
 */

var db = require('./db.js');

//验证用户名是否存在
exports.checkname = function(name,callback){
    var sql = "select * from t_users where ACCOUNT = ?";
    db.query(sql,[name],callback)
};

//插入数据
exports.insert_data = function (name,pass,callback) {
    var sql = "insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
    db.query(sql,[name,pass],callback);
};
//
exports.sel_data = function (name,pass,callback) {
    var sql = "select * from t_users where ACCOUNT = ? and PASSWORD = ?";
    db.query(sql,[name,pass],callback);
};
exports.sel_name_by_pass = function (name,pass,callback) {
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[name,pass],callback);
};

