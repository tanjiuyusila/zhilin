// 同步&异步
//例子1：
//期待顺序：thinging~~~~~~ -> I am answering another question. -> Thinking 5s get the answer
    /*
    function Person(){
        this.think = function (callback) {
            console.log('thinking ~~~~');
            setTimeout(function () {
                callback();
            },5000)
        };
        this.answer = function () {
            console.log('I am answering another question.')
        }
    }
    var person = new Person();
    person.think(function () {//等想起来再写，甩到事件队列，异步必须要有一个回调，见异步同步辨析；
        console.log('Thinking 5s get the answer')
    });
    person.answer();
    */

    // 异步同步辨析
   /*
   fs.readFile('filename',function () {

   });
   fs.readFileSync('filename')
   */


// 例子2：
    /*
    function haveLunch(food,drink,callback) { //异步
        console.log('dating lunch of ' + food + ' and ' + drink)
        if(callback && typeof(callback) === "function"){//回调函数不为空且类型全等于函数
            setTimeout(function () {
                callback();
            },5000)
        }
    }
    haveLunch('toast','coffee',function () {
        console.log('finish lunch');
    });
    */
//引出回调函数；回调函数可以是同步的，也可以是异步的

//同步函数:延时5秒；用循环来实现
    /*
        function waitFive(name,function_name) {
            var pus = 0;
            var currentData = new Date();
            function_name(name);
            while(pus<5000){
                var now = new Date();
                pus = now - currentData;
            }
        }
        function echo(name) {
            console.log(name);
        };
        waitFive("yaozhilin",echo);
        console.log('It is over');//验证同步方法
    */


