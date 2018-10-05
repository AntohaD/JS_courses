'use strict'

// Написать класс Periodicity, который при помощи регулярных выражений находит 
// частоту встречаемости отдельных слов.У него должен быть метод, 
// который будет возвращать объект с такой информацией:
// - исходный текст
// - количество слов
// - список слов, их количество в тексте и процент по отношению к общему числу
// Для примера используйте любой текст до 100 слов, но часть из которых повторяются

const text = "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event.JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour."
const pattern = /[A-za-z'\-]+/gi;
const arr = text.toLowerCase().match(pattern);

class Periodicity {
    constructor(someText) {
        this.someText = someText;
    }
    
    listWords() {

        print(`TEXT: ${this.someText} <br><br>`);
        
        print(`Sum of words in the text: ${arr.length} <br><br>`);

        count(arr);
    }
}

const myPeriodicity = new Periodicity(text);

myPeriodicity.listWords();

function print(text) {
    document.write(text);
}

function count(array) {
    let result = {}

    for (let i = 0; i < array.length; i++) {
        let a = array[i];

        if (result[a] != undefined) {
            ++result[a];
        } else {
            result[a] = 1;
        }
    }

    for (let word in result) {
        print(`The word <b>"${word}"</b> is repeated <b>${result[word]}</b> times, and is <b>${((result[word] / array.length) * 100).toFixed(1)}%</b> of the total <br>`);
    }
}

