"use strict";

// 2. Создать массив с планетами, включая Плутон. Удалить Плутон методом pop()
// Вывести все планеты по одной, перебрав массив в цикле for()
// 3. Перебрать массив с планетами в обратном порядке (от Нептуна до Меркурия) 
// тоже циклом for()

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

planets.pop();

for (let i = 0; i < planets.length; i++) {
    console.log(planets[i]);
}

console.log(" ");

for (let i = planets.length-1; i >= 0; i--) {
    console.log(planets[i]);
}