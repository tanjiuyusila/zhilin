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

exports.ins_blog_by_data = function (title,content,cid,date,uid,callback) {
    var sql = "insert into t_blogs(TITLE,CONTENT,CATALOG_ID,ADD_TIME,WRITER) values(?,?,?,?,?)";
    db.query(sql,[title,content,cid,date,uid],callback);
};
exports.get_catalogs_by_id = function (uid,callback) {
    var sql = "select * from t_blog_catalogs where USER_ID = ?";
    db.query(sql,[uid],callback);
};
//更新该分类的博客数量
exports.update_catalog_by_count = function (cid,callback) {
    var sql="update t_blog_catalogs set BLOG_COUNT=BLOG_COUNT+1 where CATALOG_ID=?";
    db.query(sql,[cid],callback);
};
//博客分类
exports.checkCatalog = function (uid,callback) {
    var sql = "select * from t_blog_catalogs where USER_ID = ?";
    db.query(sql,[uid],callback);
};
exports.add_catalog = function (cname,uid,callback) {
    var sql = "insert into t_blog_catalogs(NAME,USER_ID) values (?,?)";
    db.query(sql,[cname,uid],callback)
};
exports.sel_data_by_bid = function (bid,callback) {
    var sql = "select * from t_blogs where BLOG_ID = ?";
    db.query(sql,[bid],callback)
};
exports.update_data = function (title,content,hid,callback) {
    var sql = "update t_blogs set TITLE=?,CONTENT=? where BLOG_ID=?";
    db.query(sql,[title,content,hid],callback);
};
exports.del_data_by_bid = function (bid,callback) {
    var sql = "delete from t_blogs where BLOG_ID = ?";
    db.query(sql,[bid],callback);
};
//更新浏览数
exports.update_hits_by_bid = function (bid,callback) {
    var sql = "update t_blogs set CLICK_RATE = CLICK_RATE + 1 where BLOG_ID = ?";
    db.query(sql,[bid],callback)
};
//上一页数据
exports.get_up_by_one = function (bid,callback) {
    var sql = "select * from t_blogs where BLOG_ID < ? ORDER BY BLOG_ID desc limit 1";
    db.query(sql,[bid],callback);
};
exports.get_down_by_one = function (bid,callback) {
    var sql = "select * from t_blogs where BLOG_ID > ? ORDER BY BLOG_ID asc limit 1";
    db.query(sql,[bid],callback);
}