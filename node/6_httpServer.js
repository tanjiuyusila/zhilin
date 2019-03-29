// webpack自带了httpServer
// 手动用弄得实现一个httpServer
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plain'});//写包头：200证明页面完全传输回去了。
    res.end("<h1>hello</h1>");   //浏览器不会解析标签；需要在包头中说明，将plain改成html，就可以识别标签。end返回包体，截掉数据包
}).listen(3000);
console.log('server start');
/*
    执行之后在控制台闪烁，不会弹出路径，证明这个服务被on在内存里，没有结束，
    等待接收响应。
    在 http://localhost:3000/ 上显示 hello 字符串。
*/