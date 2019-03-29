//1. 函数和过程的区别
        /*
       function f() {
           //过程
       }
       function f1() {
           return 0;//有return是是函数，没有return的是过程
       }
        */

//2. 解释器、预编译、
        /*
        var a = function () {
            console.log(123);
        };
        function a() {   //先加载内存
            console.log(456);
        }
        a();   //输出123；原因：（预编译）v8解释器扫描全部代码，先扫描var关键字，然后找函数，function a 被预编译，
                //然后代码从上到下执行，执行上面的函数，输出123.
                //代码执行顺序：var a = undefined -> function a（）{}加载到内存 -> var a = function（）{}覆盖。
        */

//3. console.log在node中是异步的，有一个回调函数

//4. 同步&异步
    //	1. js解释器先扫描同步代码和异步代码；
    //  2. 把异步代码抛给事件循环；
    //  3. 当前线程必须空闲，同时满足触发条件（磁盘I/O（中断），网络I/O，时间，on，addListener，emit）
        /*
        setTimeout(function () {   //异步函数
            console.log(1)
        },0);
        console.log("end");  //先输出end，再输出1；
        */

//5. es6 实现 promise 的原因
        /*
        //promise 场景：当前程序调用第三方程序都建议使用（类似携程网站，需要去12306查询，携程需要扣票功能【30分钟之内支付】）
        for(var i=0;i<=3;i++){      //for循环是同步
            setTimeout(function(){   //定时甩在事件循环里，然后执行第二次for循环
                console.log(i)
            },0)
        }
        console.log("end"); 
        //先输出end，再输出4444；
        /注意：i是全局变量，所以从事件循环中取回后可以取到。否则可能出现undefined

        var a =123;
        function fn() {
            console.log(a)
        }
        fn();//输出123；因为js可以在局部变量找不到的情况下，可以在父作用域下找到
         */
