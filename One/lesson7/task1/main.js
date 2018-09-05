"use strict"

// 1. При клике на кнопку изменить размер шрифта абзаца до 50px.

const btn = document.querySelector('Button');

btn.onclick = function() {
    const textSize = document.getElementsByTagName('p');
    textSize.item(0).style.fontSize = '50px';
}

// 2. При наведении указателя мыши на кнопку менять текст кнопки на 
// "Наведён курсор".Если мы указатель уводим, 
// то возвращать изначальный текст кнопки.
// Текст, который был там изначально получить в виде 
// переменной из реального текста кнопки, 
// а не просто написать "Кнопка".
// Посмотрите в сторону события 'mouseover'

btn.addEventListener('mouseover', changeText);

const btnText = btn.textContent;

function changeText() {
    this.textContent = 'Наведён курсор'; 
}

btn.addEventListener('mouseout', noChangeText);

function noChangeText() {
    this.textContent = btnText;
}

// 3. Имитируем примитивную проверку правильности ввода email адреса.
// Для поля "input" навесить слушатель на событие blur и проверять, 
// если среди введённых символов нет символа "@", 
// то через alert() вывести предупреждение, а если символ есть, 
// то ничего не выводим.В идеале, если мы снова поменяем текст и 
// там не будет @, то опять выводить alert().
// Проверку значения символа можно сделать через indexOf или 
// регулярным выражением.

// Также можно воспользоваться событием change - посмотрите, 
// какие условия его выполнения

const input = document.querySelector('input');

input.addEventListener('change', function() {
    
    input.addEventListener('blur', validation);
});

function validation() {
    let date = input.value;
    
    if (date.indexOf('@') < 0) {
        alert('You e-mail adress is incorrect');
    }
}

// 4. Через слушатели "focus" и "blur" менять фон input.
// Например сделать #69F0AE при фокусе и #FF8A80 при потере фокуса.

input.addEventListener('focus', function() {
    input.style.background = '#69F0AE';
});

input.addEventListener('blur', function () {
    input.style.background = '#FF8A80';
});