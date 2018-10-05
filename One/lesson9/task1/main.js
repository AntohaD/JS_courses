"use strict"

// Создать класс Calculator в стиле ES6. 
// При создании экземпляра класса в него мы помещаем два числа и 
// операнд в виде строки: const myCalc = new Calculator(10, 30, "+").
// У калькулятора должен быть метод result, 
// чтобы я мог написать console.log(myCalc.result()) 
// и мне отобразился результат.Вы можете написать его через switch/case, 
// можете оформить в виде callback-функций и тогда 
// надо писать 
// const myCalc = new Calculator(10, 30, function(a, b){return a + b}). 
// А можете через функцию eval()

class Calculator {
    constructor(a, b, symbol) {
        this.a = a;
        this.b = b;
        this.symbol = symbol;
    }

    result() {
        
        switch (this.symbol) {
            case '+':
                return this.a + this.b;
            case '-':
                return this.a - this.b;
            case '*':
                return this.a * this.b;
            case '/':
                return this.a / this.b;
            default:
                return 'Try again';
        }
    }
}

const myCalc = new Calculator(10, 30, '+');

console.log(myCalc.result());