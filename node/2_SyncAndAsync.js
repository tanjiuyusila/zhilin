// 同步&异步
//	1. js解释器先扫描同步代码和异步代码；
//  2. 把异步代码抛给事件循环；
//  3. 当前线程必须空闲，同时满足触发条件（磁盘I/O（中断），网络I/O，时间，on，addListener，emit）
/*
    执行顺序：
        同步程序代码执行最快
    process，nextTick（fn）第二
    setTimeout（Fn，0）第三
    setImmediate（Fn）事件队列最后执行
*/
//例1：
/*
setTimeout(function () {   //异步函数
    console.log(1)
},0);
console.log("end");

A: 先输出end，再输出1；
*/

// 例2
/*
var start = new Date();
setTimeout(function(){
    var end = new Date();
    console.log("Time spend "+(end-start)+"ms");
},500);
while(new Date - start < 1000){};

A: Time spend 1000ms
*/

//宏任务 & 微任务
/*
   1.先执行同步宏任务
   2.宏任务最后一行执行的是process.nextTick
   3.promise
   4.正式调用微任务 setTimeout，setInterval
   5.微任务最后一行执行的是setImmediate
 */
//例3：
/*
    for(var i=0;i<=3;i++){
        setTimeout(function () {
            console.log(i)
        },0)
    }
    process.nextTick(function () {
        console.log(345)
    });
    console.log("end");

    A: end 345 4 4 4
*/

//例4：
/*
    setTimeout(function(){
        console.log(123);
    },0);
    process.nextTick(() => console.log(1));
    Promise.resolve().then(() => console.log(2));
    process.nextTick(() => console.log(3));
    Promise.resolve().then(() => console.log(4));
    console.log("end");
    // A: end 1 3 2 4 123
*/


//例5：
/*
    setImmediate(function () {
        console.log('setImmediate延迟执行1');
        //进入下一个事件循环
        process.nextTick(function () {
            console.log('强势插入！！')
        });
    });
    setImmediate(function () {
        console.log('setImmediate延迟执行2');
    });
    setTimeout(function () {
        console.log("setTimeout")
    });
    process.nextTick(function () {
        console.log('nextTick延迟执行1');
    });
    process.nextTick(function () {
        console.log('nextTick延迟执行2');
    });
    console.log("正常执行");

    // A:正常执行 -> nextTick延迟执行1 -> nextTick延迟执行2 ->  setTimeout -> setImmediate延迟执行1 -> setImmediate延迟执行2 -> 强势插入
*/

//例6：
/*
    setTimeout(function () {
        console.log(3)
    },0);
    process.nextTick(function A() {
        console.log(1);
        process.nextTick(function B() {
            console.log(2);
        })
    });

    A:1 2 3
*/

/*
    辨析：process.nextTick 嵌套 process.nextTick vs setImmediate 嵌套 process.nextTick
    process.nextTick 还没有进入微任务，就可以继续执行 process.nextTick
    但 setImmediate 已经进入微任务，就要将 process.nextTick 扔进下一个事件循环
 */


