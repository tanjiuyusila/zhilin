/*  1.
    GET POST http四大关键字： get post put delete
    GET url上显示数据，不超过4096字节，
    POST 缓冲区拼接字符串，数据包 = 包头 + 包体 s+h=L ，Ps：成功发包率， Pe：误码率，Ps，Pe计算公式，
数据分段（计算机网络），之后按段发，
*/
/*  2.
    所有跟dom相关的原生语法，node都不支持，例如alert
 */
/*  3. node自动加载模块：
      module,console,global,process,timer,
      常问：process.nextTick(),process.on()
 */
/* 4. querystring 模块
        querystring.parse 字符串 => 对象
        querystring.stringify 对象 => 字符串
 */
/* 5. 问题：
        拷贝文件：
            分成本地化拷贝和网络拷贝
        es6：reflect
        tcp：vs udp
 */
/* 6. 标签理解
    标签可以理解成一个类，node5-75：04
    标签的id属性可以直接通过.来获取，xx属性则需要通过getAttribute来获取；
    可以理解成，将id设置成公有属性，xx设置成私有属性
 */
