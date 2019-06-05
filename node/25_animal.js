/*
    实现一个基类animal，该基类包含方法say，该方法输出nothing，接下来实现两个继承类duck和bird，
    其中duck是一个静态模块类，其有方法say，该方法输出ga...ga，而bird则是ige动态调用模块，其有方法
    say，该方法输出ji...ji
 */
module.exports = function () {
    this.say = function () {
        console.log('nothing');
    };
    this.write = function () {
        console.log('write');
    }
}