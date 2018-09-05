"use strict"

function calc(a, b, method) {
    return method(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calc(15, 6, add));
console.log(calc(10, 20, subtract));
console.log(calc(10, 30, multiply));