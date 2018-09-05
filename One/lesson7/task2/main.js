"use strict"

// При клике на кнопку запускается функция prompt(), 
// которая спрашивает имя пользователя.После ввода имени, 
// создаётся абзац, в текст которого записывается имя и этот абзац вставляется 
// ПЕРЕД кнопкой.Если пользователь ввёл слово "Stop" или 
// "Escape" в любом регистре, то слушатель события клика по кнопке пропадает.
// слушатели событий можете добавлять разными способами: 
// прямо в разметку через onclick, onfocus, в размету через<script>.
// Или по - разному, чтобы закрепить все варианты
// для удаления события нужен removeEventListener, погуглите, как он работает

const btn = document.querySelector('BUTTON');

const parent = btn.parentNode;
const elem = document.createElement('p');

btn.addEventListener('click', keyWords);

function keyWords() {
    let userName = prompt('Enter your name', 'Vasya');
    elem.textContent = userName;
    parent.insertBefore(elem, btn);
    
    if (userName.toLowerCase() == 'stop' || userName.toLowerCase() == 'escape') {
        
        btn.removeEventListener('click', keyWords);
    }
}