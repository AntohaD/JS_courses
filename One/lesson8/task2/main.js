"use strict"

/* сделать так, чтобы через 5 секунд после срабатывания события 
"change" через alert() выводился текст, который мы ввели в input. 
Подсказка - используйте setTimeout().
Почитайте, при каких условиях работает "change" для input. */

const inp = document.getElementsByTagName("input").item(0);
inp.addEventListener("change", function () {
    setTimeout('alert(inp.value)', 5000);
});