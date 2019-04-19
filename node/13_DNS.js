//DNS解析（域名解析），返回ip
var dns = require('dns');
//dns.resolve4/6
dns.resolve("www.taobao.com",function (err,addresses) {
    if(err){
        console.log(err)
    }else{
        console.log(addresses)
    }
});