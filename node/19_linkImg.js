/*
问题4：
    引入img
    详述：
        1. index.html中

 */
        var http = require('http');
        var fs = require('fs');
        var url = require('url');

        http.createServer((req,res) =>{
            var pathname = url.parse(req.url).pathname;
            switch(pathname){
                case '/':
                    goIndex(res);
                    break;
                case '/parse':
                    goString(res);
                    break;
                case '/img':
                    goImg(res);
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
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('yaozhilin')
        }
        function goImg(res) {
            var imgname = __dirname + '/module/'+url.parse('1.jpg').pathname;
            var imgdata = fs.readFileSync(imgname);
            res.writeHead(200,{'Content-type':'image/jpeg'});//409种
            res.end(imgdata)
        }

