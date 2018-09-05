"use strict"

// 2. Создать функцию bye(), которая через prompt() 
// будет спрашивать имя пользователя и прощаться с ним, 
// выводя на экран "До свидания, <здесь будет имя>"

function bye(name) {
    name = prompt("What your name?", "Petya");
    return "До свидания, " + name;
}

console.log(bye());