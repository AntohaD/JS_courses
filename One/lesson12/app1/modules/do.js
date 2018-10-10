const sun = require('./sun');
const moon = require('./moon');

let innerVar = 0;

module.exports.doSomething = function (hours) {

    console.log(++innerVar);

    let heavenItem = '';

    if (hours > 6 && hours < 20) {
        heavenItem = sun.name;
    } else if (hours >= 20 || hours < 4) {
        heavenItem = moon.name;
    } else {
        heavenItem = `${sun.name} and ${moon.name}`;
    }

    console.log(heavenItem);
};