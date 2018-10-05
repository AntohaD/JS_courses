'use strict'

// Необходимо найти в нём число и выделить его жирным шрифтом, 
// то есть обрамить тегом < b ></b > или < strong ></strong >.
// И перезаписать отображаемый абзац с обычным текстом, на новый абзац.
// Предлагаю вспомнить свойство innerHTML и также применить функцию replace(),
// которая может использовать регулярки.

const p = document.querySelector('p');
const pattern = /\d+/g;

p.innerHTML = p.textContent.replace(pattern, '<b>' + p.textContent.match(pattern) + '</b>');