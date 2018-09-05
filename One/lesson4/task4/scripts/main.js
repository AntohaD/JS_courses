"use strict";

// 6. Создать объект с именем address с полями userName, country, city, street. 
// Заполнить их через переменные. Значения этих переменных получить через prompt(), 
// как это сделано в примере по ссылке https://jsfiddle.net/u3uwbukg/
// Через цикл for in вывести на экран всю информацию о пользователе.

var a = prompt("Enter userName",);
var b = prompt("Enter country",);
var c = prompt("Enter city",);
var d = prompt("Enter street",);

var adress = {
    userName: a,
    country: b,
    city: c,
    street: d
}

for (var key in adress) {
    console.log( key + " = " + adress[key]);
}