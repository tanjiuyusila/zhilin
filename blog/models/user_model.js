/*连接数据库
     1. 数据库引擎
 */

var db = require('./db.js');

exports.insert_data = function (name,pass,callback) {
    var sql = "insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
    db.query(sql,[name,pass],callback);
};
//
exports.sel_data = function (name,pass,callback) {
    var sql = "select * from t_users where ACCOUNT = ? and PASSWORD = ?";
    db.query(sql,[name,pass],callback);
};