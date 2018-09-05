"use strict";

let sumThree = 0;
let sumFive = 0;
let sumThreeAndFive = 0;

for (let i = 1; i <= 100; i++) {
    if ( i%3 == 0) {
        sumThree++;
    } if ( i%5 == 0) {
        sumFive++;
    } if ( i%3 == 0 && i%5 == 0) {
        sumThreeAndFive++;
    }
}

alert (`
Three: ${sumThree}
Five: ${sumFive}
Three and Five: ${sumThreeAndFive}`);