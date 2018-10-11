const human = require('./husband').mod;

const fs = require('fs');

const husband1 = new human;

try {
    fs.appendFileSync('loh.txt', husband1.getSalary());
    fs.appendFileSync('log.txt', husband1.listFriends());
    fs.appendFileSync('log.txt', husband1.ifSober());

    console.log('Added to the log file');

} catch (error) {
    console.log(error);
}
