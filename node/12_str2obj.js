//string to object 称作反序列化
    var data = "{'id':1,'name':'yzl'}";
//法1：
    // var obj = eval("("+data+")");//会有安全问题，所以使用方法2。
//法2：
    // JSON.parse 需要注意，必须是外单引，内双引。
    var data = '{"id":1,"name":"yzl"}';
    var obj = JSON.parse(data);
    console.log(obj);