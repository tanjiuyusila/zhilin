//原型链：节省内存空间
//在任何一个被new的对象中，都有一个__proto__属性

//     var a = function(){
//         var x = 1;//相当与私有变量，当前作用域被调用
//         this.name = 'yzl';  //this的可以被暴露
//         this.age = function () {
//             console.log(25);
//         };
//     };
//     a.prototype.write = function () {
//         console.log('原型链')
//     };
//     var A = new a();
//     console.log(A.__proto__);   //打印出write函数
//     console.log(A.__proto__ == a.prototype);   //true
//     A.write();
//
//例题1：
    // instanceof:是否是子集，
    console.log( Function instanceof Object );  //返回true
    console.log( Array instanceof Object );  //返回true
    console.log( Object instanceof Array );  //返回false
    console.log( Object instanceof Function );  //特例：返回true，其他的Array，Math，正则，string都是false
    // Function 可以是函数，也可以是类
    console.log(Object.prototype);  //Object的prototype是空对象
    console.log(Function.prototype);//Function的prototype是空方法
    console.log(Function.prototype.isPrototypeOf(Object));//返回true
