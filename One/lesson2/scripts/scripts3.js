"use strict";

let a = (Math.random()*100).toFixed(2);
let b = (Math.random()*100).toFixed(2);
let c = (Math.random()*100).toFixed(2);
let max;

if (a > b && a > c) {
    max = a;
} else if (b > c) {
    max = b;
} else {
    max = c;
}

alert(
`number 1 = ${a}
number 2 = ${b}
number 3 = ${c}

maximum = ${max}`
);