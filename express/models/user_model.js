/*
   操作数据库
    1. 加载引擎：var mysql = require('mysql');
    2. 创建数据库连接
    3. 操作数据
 */
//1.
var mysql = require('mysql');
var db = require('./db.js');

/*2-1
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog'
});
*/
/*2-2 pool
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'blog'
});
*/

exports.insert_data = function (name,pass,callback) {
/*  3-1 该方法不推荐，使用连接池的方法
        connection.connect();

        connection.query('SELECT * from t_users ', function (error, results, fields) {
            if (error) throw error;
            // console.log(results);
            callback(error,results);
            connection.end();
        });
*/

    /* 3-2 pool
    pool.query('insert into t_users(ACCOUNT,PASSWORD) values(?,?)',[name,pass], function (error, results, fields) {
        if (error) throw error;
        callback(error, results)
    });
    */
    /*3-3封装*/
    var sql = "insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
    db.query(sql,[name,pass],callback);

};
exports.sel_login_data = function (name,pass,callback) {

/*3-1  筛选语法不对，在npm上找找
    connection.connect();
    connection.query('SELECT * from t_users where ACCOUNT=name and PASSWORD=pass', function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
        callback(error,results);
        connection.end();
    });
*/
//
/* 3-2
    pool.query('SELECT * FROM t_users WHERE ACCOUNT = ? and PASSWORD = ?', [name,pass], function (error, results, fields) {
        if (error) throw error;
        callback(error, results)
    });
*/
/*3-3 封装*/
    var sql = "select * from t_users where ACCOUNT = ? and PASSWORD = ?";
    db.query(sql,[name,pass],callback);

};