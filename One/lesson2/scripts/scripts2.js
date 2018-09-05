"use strict";

let a = (Math.random()*100).toFixed(2);
let b = (Math.random()*100).toFixed(2);
let max;

if (a > b) {
    max = a;
} else {
    max = b;
}

alert(
`number 1 = ${a}
number 2 = ${b}
maximum = ${max}`
);