'use strict'

// Создать класс Bender у которого будет переменная "wasted".
// При создании экземпляра мы присваиваем ей значение true или false 
// в виде const myBender = new Bender(true);
// то есть то, что мы помещаем в new Bender должно присвоиться 
// в "wasted".У класса есть два метода: bend() и say(), 
// написанные в прототипе.Если wasted === true, то при вызове bend() 
// будет сообщение в консоль "не могу работать", а для say() 
// сообщение "Kiss my shiny metal ass".
// Если wasted === false, то bend() выдаст "сгибаю", 
// а say() выдаст "Привет".

function Bender (wasted) {
    this.wasted = wasted;
}

Bender.prototype.bend = function() {
    if (this.wasted) {
        console.log('не могу работать');
    } else {
        console.log('сгибаю');
    }
}
Bender.prototype.say = function () {
    if (this.wasted) {
        console.log('Kiss my shiny metal ass');
    } else {
        console.log('Привет');
    }
}
const myBender = new Bender(true);

myBender.bend();
myBender.say();