'use strict'

// Создать массив, куда добавлять то, что вводит пользователь.
// Повесить слушатель на событие "change".Когда оно отрабатывает, 
// проверять содержимое input и, если оно в массиве отсутствует, 
// то записывать в массив, иначе выдавать сообщение, что такое имя уже есть в базе
// с помощью регулярного выражения убедиться, что пользователь ввёл только буквы.
// Для кириллицы проверка[А - ЯЁа - яё]

let arr = [];
const pattern = /^[А-ЯЁа-яё]+$/;
const input = document.querySelector('input');

input.addEventListener("change", function search() {

    if (pattern.test(input.value)) {
        for (let i = 0; i < arr.length; i++) {
            if (input.value == arr[i]) {
                console.log(`${input.value} this name already exists`);
                return false;
            } 
        }

        arr.push(input.value);
        console.log(`${input.value} add in list`);        
    } else {
        console.log(`${input.value} is not a name`);
    }
});

