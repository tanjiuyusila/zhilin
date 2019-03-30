/*
需求：比较数组中3个网站的返回速度哪个比较快。同步的话必须等第一个网站数据包返回才能发下一网站的。需要各个相减，计算时间。常说的ping值。
 */

/*
遇到的问题：
1.如何向已知域名发送数据包；
2.找到某个方法可以发送get请求；

解决方法：
1.发起一次get请求，向url发送信息；
2.发送http请求，选择http模块；get方法
 */
    var http = require('http');
    urls = ['www.baidu.com','www.qq.com','www.sohu.com'];

    function fetchPage(url) {
        var start = new Date();
        http.get({'host':url},function (res) {
            console.log("Get response from" + url);
            console.log("Request took"+ (new Date - start) + "ms");
        })
    }
    for(var i=0;i<urls.length;i++){   //触发条件是网络io
        fetchPage(urls[i]);
    }
