/*
    node 实现get操作
    步骤：
    1. url: http://localhost:3000/parse?name=yaozhilin，通过req.url拿到；
    2. 参数字符串获取： var urlstr =  url.parse(req.url).query;
    3. 反序列化拿到每一个参数：querystring
    4. obj.name获取
 */
    var http = require('http');
    var url = require('url');
    var querystring = require('querystring')

    http.createServer((req,res) => {
        var urlstr =  url.parse(req.url).query;
        console.log(urlstr);
    //3. 提取参数：使用反序列化；querystring(类似于html5中的JSON.parse)
        var nameobj = querystring.parse(urlstr);
        // console.log(nameobj) //{ name: 'yaozhilin' }
    //4. 使用的时候直接obj.name取就可以了.
    }).listen(3000);

    console.log('server start');