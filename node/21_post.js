/*
    node 实现post操作
    node:事件驱动；Event模块
    事件监听：系统事件和自定义事件；
    http监听：系统事件；
    http数据发送：（osi协议第七层）通过
    步骤：
    1.接收post数据的时候，谁给post上来的：=> 浏览器 浏览器往服务器发包的时候：在req数据包中；
    所以resAdd函数还要传req
    2.逻辑：
        a.Post概念：数据量大，对于内存来接收数据，不可能一次无限吞吐数据。开辟出的缓冲区不可能一次把数据读完；
    即要读完所有数据，需要多个缓冲区，然后将接收到的数据拼接。因此需要定义共有变量，来存储拼接的数据;
        b.服务器往客户端发送的时候，设置了传输编码；客户端往服务器发的时候，也要设置传输编码；req.setEncoding方法；
        c.接收数据：服务器监听事件；req.addListener(eventName,listener)listener是 function；
    TCP协议定监听事件名称：data：当接收数据时，触发该事件.
        d.监听终止事件：用querystring提取数据；
        e.希望往回传一个ip地址，拿到域名换成ip，传回页面：(dns.resolve)
 */
    var http = require('http');
    var url = require('url');
    var fs = require('fs');
    var querystring = require('querystring');

    http.createServer((req,res) =>{
        var pathname = url.parse(req.url).pathname;
        switch(pathname){
            case '/':
                goIndex(res);
                break;
            case '/parse'://接收post数据
                resAdd(res,req);
                break;
            default:
                res.writeHead(404,{'Content-type':'text/html'});
                res.end('not found page');
        }
    }).listen(3000);

    function goIndex(res){
        var pathname = __dirname + '/module/'+url.parse('index.html').pathname;
        var filename = fs.readFileSync(pathname,'utf-8');
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(filename);
    }
    //Post实现
    function resAdd(res,req){
    //    2-a：
        var postData = "";
    //    2-b：//写成utf8，涉及到三码一致：文件编码，浏览器解码，数据库编码；数据库将utf-8转变成utf8；
        req.setEncoding('utf8');
    //    2-c：TCP协议定监听事件名称：data：当接收数据时，触发该事件
        req.addListener('data',function (postChunk) {//回调函数，接收到的是缓冲区的数据，
            postData += postChunk;
        });
    //    2-d：提取数据：用querystring
        req.addListener('end',function () {//回调中
            // console.log(postData);//search_dns=www.qq.com&sub=%E6%9F%A5%E8%AF%A2  //unicode码，每三个对应一个中文，后面你的字符代表查询二字
            var dnsobj = querystring.parse(postData);
            // console.log(dnsobj);//{ search_dns: 'www.qq.com', sub: '查询' }
            var dnsstr = dnsobj.search_dns;
            // console.log(dnsstr);
    //    2-e: 使用dns.resolve4 or 6
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end(dnsstr)  //使用dns.resolve4，转换成域名；不写了
        })
    }

    console.log('server start');