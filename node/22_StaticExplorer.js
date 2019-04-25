/*
静态资源管理器：接18——linkCss

1. 静态资源传值：
    a.处理静态资源，需要网络路径，传pathname
    b.静态资源存在那:realpath
    c.res
2. 静态资源管理器是干什么的：
    a.先输出一下realpath;
    b.判断一些该静态资源是否存在，不存在要报错：
    c.如果存在：考虑怎么解决
        i.首先要分辨出来，这个静态资源是什么类型的；要能切出后缀。pathname中存放的是文件名，
          需要拿到最后一个"."后面的内容，即后缀
        ii. switch case,匹配类型
    d.回传数据包
3. 公司使用数组先封装409种，然后不用轮询，用hashmap映射方式来对应
 */
var http = require('http');
var fs  = require('fs');
var url  = require('url');

    http.createServer((req,res) => {
        var pathname = url.parse(req.url).pathname;
        // console.log(pathname);
        // console.log(url.parse(req.url));
        var realpath = __dirname + '/static' + pathname;
        if(pathname == 'favicon.ico'){//防止图标找不到报错
            return;
        }else if(pathname == '/'){
            goIndex(res)  //加载html文件
        }else{
            // 有一个统一的函数，处理静态资源
            dealWithStatic(pathname,realpath,res)
        }
    }).listen(3000);

    console.log("server start");

    function goIndex(res) {
        var readpath = __dirname + '/static/' + url.parse('newIndex.html').pathname;
        var indexPage = fs.readFileSync(readpath,'utf-8');
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexPage)
    }
    function dealWithStatic(pathname,realpath,res) {
        /* 2-a
        console.log(realpath):
        D:\学习资料\前端\zhilin\node/static/1.css
        D:\学习资料\前端\zhilin\node/static/1.jpg
         */
        //2-b
        fs.exists(realpath,function (exists) {  //有递归功能，能遍历文件夹下所有的文件
            if(!exists){
                res.writeHead(404,{'Content-type':'text/plain'});
                res.end('this request was wrong')
            }else{  //2-c
                /* i.  输出pathname，得到名称
                    console.log(pathname) // 输出 /1.css  /1.jpg
                    需要拿到最后一个"."后面的内容，即后缀
                 */
                    var pointPosition = pathname.lastIndexOf('.');
                    // console.log(pointPosition);//2
                    var mmieString = pathname.substring(pointPosition+1);
                    // console.log(mmieString)//css jpg

                /*
                    ii.switch case:
                */
                var mmietype;
                switch(mmieString){
                    case 'css':
                        mmietype = 'text/css';
                        break;
                    case 'jpg':
                        mmietype = 'img/jpeg';
                        break;
                    default:
                        mmietype = 'text/plain'
                }
                /*
                    d:读取所有静态资源；用异步读文件；类型统一是二进制；
                 */
                fs.readFile(realpath,"binary",function (err,file) {
                    //数据包放在回调函数里：
                    if(err){  //服务器错误
                        res.writeHead(500,{'Content-type':'text/palin'});
                        res.end(err)
                    }else{
                        res.writeHead(200,{'Content-type':mmietype});
                        res.write(file,'binary')//专门写包体，写简单的，用end来写就可以。end既可以写，也可以截包
                        res.end();
                    }
                })
            }
        })


    }