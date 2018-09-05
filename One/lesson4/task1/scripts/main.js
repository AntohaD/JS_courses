"use strict";

// 1. Создать массив favouriteFilms из 3-х любимых фильмов. Добавить в него ещё фильмы такими способами:
// Один фильм добавить, указав индекс через квадратные скобки, вроде arr[10] = 'text';, только используя правильные индексы
// Один добавить через метод push()
// Вывести весь массив через console.log()

const favoriteFilms = ["Avatar", "The green mile", "The Pursuit of Happyness"];
favoriteFilms[favoriteFilms.length] = "300 Spartans";
favoriteFilms.push("Taxi");

console.log(favoriteFilms);
