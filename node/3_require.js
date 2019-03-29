    var a = function(){
        var x = 1;//相当与私有变量，当前作用域被调用
        this.name = 'yzl';  //this的可以被暴露
        this.age = function () {
            console.log(25);
        };
    };

//调用age方法：
    var A = new a();
    A.age();

//需求：在其他页面调用age方法，需要引入require概念。
    a.prototype.write = function () {
        console.log('原型链')
    };
    A.write();
//原型链：见5_proto