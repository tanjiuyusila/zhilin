/*
问题1：
    node 写一个网页：
    步骤：
        1. 先把index.html读入内存；使用fs，要满足条件a，b；
            a.有文件的路径；
                i.__dirname
            b.有读入文件的方法；
        2. 把内存的数据编成数据包；
        3. 把数据包发送给chrome；
 */

var http = require('http');
var url = require('url');
var fs = require('fs')

http.createServer(function (req,res) {
  // 1-a：文件的路径获取：
  //   console.log(__dirname); //打印出：D:\学习资料\前端\zhilin\node，即当前文件上一级目录（部署的文件夹）
  //   console.log(__filename);//D:\学习资料\前端\zhilin\node\16_webset.js

    // var pathname = __dirname + '/module/' + 'index.html'//  当前路径不建议直接拼写，建议使用url.parse
    /*
        url.parse,可以拿到get传的url中的参数，（split方法切割）
            var string = "name=yaozhilin";
            var arr = str/split("=");
            console.log(arr);  ['name','yaozhilin']
        url属于request数据包，url.parse(req.url)返回一个对象
        url.parse(req.url);//url:localhost:3000/parse?name=yaozhilin
            search:'?name=yaozhilin'
            qurey:'name=yaozhilin'//拿到参数
            pathname:'/parse'//只记录路径
     */

    var pathname = __dirname + '/module/' + url.parse("index.html").pathname
    //1-b:读取路径
    /*
        读取路径方法：使用同步读取的方式
     */
    var pathobj = fs.readFileSync(pathname,"utf-8");
    //2. 写数据包
    res.writeHead(200,{'Content-type':'text/html'});
    //3. 截包显示index：
    res.end(pathobj)
/*                     成功显示出网页                     */



}).listen(3000);

console.log('server start');