"use strict"

// Необходимо найти и вывести через console.log() 2й абзац, 
// т.е. <p>Two</p>. Менять разметку нельзя, т.е. нельзя добавлять в неё классы или id 
// или ещё что-то. Пользуйтесь методами getElementsByTagName или querySelector, 
// а также их свойством children. Не забывайте, 
// что некоторые из методов вернут массив, а значит доступ к результату должен 
// быть через квадратные скобки и индекс.

const p = document.getElementsByTagName('p');

console.log(p.item(1).textContent);

// 2. В той же разметке с теми же условиями сделайте текст абзаца <p>abc</p> в 
// верхнем регистре, чтобы "abc" превратилось в "ABC". 
// Т.е. в итоге абзац станет <p>ABC</p>. Для этого дополнительно воспользуйтесь 
// свойствами textContent или innerHTML. Вспоминает, как у строк менять регистр.

let item = p.item(2).textContent;

p.item(2).textContent = item.toUpperCase();

let newP = p.item(2).textContent;