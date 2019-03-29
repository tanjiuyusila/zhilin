//1. 不将类暴露给外部：
/*
    var Demo = require('./9_module.js');  //自定义模块
    console.log(Demo);   //打印出空对象
*/

//2. 使用 module.exports 暴露给外部，此时console.log(Demo)打印出一个类。[Function: demo]
/*
    var demo = new Demo();
    demo.play();
*/

//3. 使用 module.exports 暴露给外部，（暴露对象）
/*
    var Demo = require('./9_module.js');
    console.log(Demo);//打印出对象{ name: 'yzozhilin', paly: [Function: paly] }
*/

//4. 使用 exports 暴露给外部：此时暴露对象
/*
    var Demo = require('./9_module.js');
    console.log(Demo); //打印出一个对象：{ play: [Function] }
    Demo.play();
*/
//5.使用exports将对象暴露给外部
    var Demo = require('./9_module.js');
    console.log(Demo);   //打印出空对象


