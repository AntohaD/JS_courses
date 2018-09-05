"use strict"

// 3. Найти и вывести в консоль текст элемента с id="four"

const p = document.getElementById('four');

console.log(p.textContent);

// 4. Элементам с классом "two" поменять размер шрифта на "30px". 
// Какое свойство меняет шрифт можете просто загуглить, мы им не пользовались

const classTwo = document.getElementsByClassName('two');

for (let i = 0; i < classTwo.length; i++) {
    classTwo[i].style.fontSize = '30px'; 
}

// 5. Элементу(ам) с name="five" изменить цвет текста на красный

const nameFive = document.getElementsByName('five');

for (let i = 0; i < nameFive.length; i++) {
    nameFive[i].style.color = 'red'; 
}

// 6. Как вы заметили, для красоты не хватает элемента с текстом "Three". 
// Создайте такой абзац и вставьте после <p class="two">Two</p>.

const elem = document.createElement('p');
elem.textContent = 'Three';

const div = document.getElementsByTagName('div').item(0);

let div1 = div.children[0].appendChild(elem);

// 7. Поменяйте фон этих абзацев
// <p id="four">Four</p>
// <p name="five">Five</p>
// на жёлтый. Для этого найдите их родительский "div" и 
// меняйте фон его дочерним элементам.

const div2 = document.getElementsByTagName('div').item(2).children;

for (let i = 0; i < div2.length; i++) {
    div2.item(i).style.backgroundColor = 'yellow'; 
}
