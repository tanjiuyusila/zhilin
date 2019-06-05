var util = require('util');
var Animal = require('./25_animal.js');

function Duck() {
    Animal.call(this);
    util.inherits(Duck,Animal);
    this.say = function () {
        console.log('ga...ga');
    }
}
var duck = new Duck();  //静态类，可以不用new，所以要先new出来
exports.say = duck.say;