//Buffer
// 缓存，读文件fs
    var fs = require('fs');

//同步：返回值赋给变量，异步返回给回调函数中的data
//同步：
    //fs.readFileSync(path[,options])    //[]内是可选填
    // var data = fs.readFileSync('./8_syncBuffer.txt');
//显示<Buffer 79 61 6f 7a 68 69 6c 69 6e>，只有16进制，需要重新编码。
//     var data = fs.readFileSync('./8_syncBuffer.txt','utf-8');
//     console.log(data);

//异步：不能var一个变量
    //fs.readFile(path[,options],callback)
    // fs.readFile('./8_syncBuffer.txt','utf-8',function(err,data){
    //    if(err){
    //        console.log(err)
    //    } else{
    //        console.log(data)
    //    }
    // });
    // console.log("end");

//__dirname
    console.log(__dirname);

//__filename
    console.log(__filename);

