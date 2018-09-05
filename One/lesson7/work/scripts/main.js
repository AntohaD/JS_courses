const div = document.querySelector('div');

div.addEventListener('mousemove', changeColor);

function changeColor(event) {
    this.style.background = 
    `rgb(0, ${event.clientY}, ${event.clientX})`;
}