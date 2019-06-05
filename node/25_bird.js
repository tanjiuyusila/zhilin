var util = require('util');
var Animal = require('./25_animal.js');

function Bird() {
    Animal.call(this);
    util.inherits(Bird,Animal);
    this.say = function () {
        console.log('ji...ji');
    }
}

module.exports = Bird;