'use strict'

// если нажимать на кнопку слишком много раз, 
// то мы создадим массив слишком большого размера 
// (если помните, то я говорил, что у массивов есть
// ограничение на размер в 4 с копейками млрд элементов). 
// Задача - отловить нашу исключительную ситуацию, 
// правильно обернув нужные моменты в try/catch/finally

const btn = document.getElementsByTagName('button').item(0);
const exp = 2;
let number = 10;

btn.addEventListener("click", function () {
    number = Math.pow(number, exp);
    try {
        new Array(number);
    } catch (error) {
        console.log(error);
    }
    
    console.log(number);
});