//读取 8_syncBuffer.txt 文件，读取之后停2s，再结束
    var fs = require('fs');
    fs.readFile('./8_syncBuffer.txt','utf-8',function (err,data) {
        if(err){
            console.log(err)
        }else{
            getData(data);
        }
    });
    function getData(data){
        setTimeout(function () {//合理如果传一个data，从队列里出来的时候，该函数作用域中的dat（即传进去的data已经被销毁了）。
            // 如果不传data，当前作用域中没有从父作用域getData中找到的传给该函数的data
            console.log(data);
        },200)
    }
