/*
1. util.inherits(constructor,superConstructor)
2. 继承：子类可以直接拿到父类的构造函数；
3. 构造函数：当前这个类，在被new的时候，第一个执行的函数
3. java如何在newige子类的时候拿到父类的方法：super函数
    php...: 静态方法-'parent::'
4. 访问动态方法：必须要new，
       静态方法：类名直接访问；
5. es6继承：extends
   es5继承：把super赋给当前构造函数，原生js中没有这样的方法，只有call，apply；用call，见es6 class
 */
/* 用event来实现继承
 */

var util = require('util');
var events = require('events');

function MyStream() { //即是类名，又是构造函数
     events.EventEmitter.call(this);
}

util.inherits(MyStream,events.EventEmitter);
//完成继承，但是还有问题，call的时候，只把类内部的东西拷贝过去，原型链没有拷贝过去

MyStream.prototype.write = function (data) {
    this.emit("data",data); //eventEmitter.emit() 方法可以传任意数量的参数到监听器函数。
    // 当监听器函数被调用时， this 关键词会被指向监听器所绑定的 EventEmitter 实例。
    //例子:一个简单的 EventEmitter 实例，绑定了一个监听器。 eventEmitter.on() 用于注册监听器，
    // eventEmitter.emit() 用于触发事件。
};
var stream = new MyStream();
stream.on('data',function (data) {
    console.log(data)
});
stream.write("It works");