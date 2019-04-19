/*
问题2：
    根据不同的路径匹配不同的页面；通过swich case来实现；即写一个路由
    通过url.parse().query
    功能描述：
        1. 地址‘/’ -> index.html
        2. 地址‘/parse’ -> 显示yaozhilin
        3. 其他 404
 */
        var http = require('http');
        var fs = require('fs');
        var url = require('url');

        http.createServer((req,res) =>{
            // console.log(req.url);
            // console.log(req.method);//get or post
            //需要req.url来实现case跳转
            var pathname = url.parse(req.url).pathname;

            switch(pathname){
                case '/':
                    goIndex(res);
                    break;
                case '/parse':
                    goString(res);
                    break;
                default:
                    res.writeHead(404,{'Content-type':'text/plain'});
                    res.end('not found page')
            }
        }).listen(3000);
        console.log('Server start');
        function goIndex(res) {
            var filename = __dirname + '/module/' + url.parse('index.html').pathname;
            var data = fs.readFileSync(filename,'utf-8');
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(data)
        }
        function goString(res) {
            res.writeHead(200,{'Content-type':'text/html'})
            res.end('yaozhilin')
        }

    /*
    引出问题：
        css样式全部使用内联样式
     */
