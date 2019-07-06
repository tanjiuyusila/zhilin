var db = require('./db.js');
 exports.sel_all = function (callback) {
     var sql = "select * from t_blogs";
     db.query(sql,[],callback)
 };
 exports.sel_id_by_data = function (uid,callback) {
     /* user表和blogs表关联
     var sql = "select * from t_users ,t_blogs where t_users.USER_ID = t_blogs.WRITER and t_blogs.WRITER = ?"
     db.query(sql,uid,callback)
     */
 //user表，blogs表和catelog关联,包含所有相关信息
     var sql = "select * from t_users ,t_blogs,t_blog_catalogs where t_users.USER_ID = t_blogs.WRITER and t_blogs.CATALOG_ID = t_blog_catalogs.CATALOG_ID and t_blogs.WRITER = ?";
     db.query(sql,uid,callback);
 };

exports.ins_blog_by_data = function (title,content,date,uid,callback) {
    var sql = "insert into t_blogs(TITLE,CONTENT,ADD_TIME,WRITER) values(?,?,?,?)"
    db.query(sql,[title,content,date,uid],callback);
};