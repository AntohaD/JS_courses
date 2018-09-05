"use strict"

// 3. Доработать наш пример из лекции с функцией calc(). 
// На уроке у нас были callback-функции add(), multiply() и subtract(). 
// Написать ещё и функции для деления, деления по модулю, 
// возведения первого числа в степень второго.
// Ну и естественно, вызвать функцию calc() с этими всеми коллбэк-функциями 
// и двумя числами, над которыми будут производиться действия.

console.log(calc(15, 6, add));
console.log(calc(10, 20, subtract));
console.log(calc(10, 30, multiply));
console.log(calc(100, 2, divide));
console.log(calc(9, 2, divideByModulus));
console.log(calc(3, 4, power));

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

function divide(x, y) {
    return x / y;
}

function divideByModulus(x, y) {
    return x % y;
}

function power(x, y) {
    let sum = 1;
    for (let i = 1; i <= y; i++) {
        sum *= x;
    }
    return sum;
}