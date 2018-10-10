// const fs = require('fs');

// fs.unlink('./texts/guide.txt', (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('file deleted');
// });

// console.log('Finish');

// *************************************************

// const events = require('events');
// const emitter = new events();
// const active ='WakeUp';
// const sleep = 'Sleep';

// emitter.on(active, function(e) {
//     console.log('Woke up');
// });

// emitter.on(sleep, function (e) {
//     console.log('Went to bed');
// });

// const hours = new Date().getHours();

// emitter.emit(hours > 8 && hours < 22 ? active : sleep);

// ******************************************************

const DO = require('./modules/do');

DO.doSomething(5);
DO.doSomething(15);
DO.doSomething(23);