/* примитивная, но по-своему забавная попытка создать эффект дождя) 
вроде прикольно смотрится, но даже у меня на достаточно мощном 
компьютере начинает подвисать, если нажать несколько раз на кнопку RAIN. 
А всё потому, что у меня один setInterval вызывается в другом при 
каждом клике. И каждый из интервалов создаёт элемент div к каждому 
из которых присваиваются стили.
выходит, что 10 кликов запустят 10 интервалов, а они породят по 100 
интервалов в секунду. Даже боюсь запускать это с телефона.
соответственно нужно переделать:
а) добавить кнопку STOP, которая бы очищала наш интервал под названием rain
б) клик на кнопку RAIN удаляет слушатель на этой кнопке, чтобы она не 
срабатывала несколько раз. Кнопка STOP добавляет слушатель кнопке RAIN
в) можно попробовать сделать предварительное создание всех div-ов, 
чтобы они создавались не на ходу */

const html = document.getElementsByTagName("html").item(0);
const btn = document.getElementById("btn");
const div = document.getElementById("rain_container");
const btnStop = document.getElementById("btnStop");

const COLOR = (function () {
    return {
        red: function () {
            return Math.floor(Math.random() * 255);
        },
        green: function () {
            return Math.floor(Math.random() * 255);
        },
        blue: function () {
            return Math.floor(Math.random() * 255);
        }
    };
})();

btn.addEventListener("click", rain);
btnStop.addEventListener("click", stopRain);

function getColor() {
    const white = Math.floor(Math.random() * 100 + 155);
    return "rgb(" + white + ", " + white + ", " + white + ")";
}

function makeRain() {
    const styles = {
        width: "2px",
        height: "12px",
        position: "absolute",
        top: Math.floor(Math.random() * -100) + "px",
        left: Math.floor(Math.random() * 1300) + "px",
        backgroundColor: getColor(),
        display: "none"
    };

    let drop = new makeDrop();
    const interval = setInterval(function () {
        let pos = parseFloat(drop.style.top);
        if (pos > -100 && pos < 1250) {
            drop.style.display = "block";
            drop.style.top = pos + 5 + "px";
        } else if (pos <= -100) {
            drop.style.top = pos + 5 + "px";
        } else {
            drop.style.top = pos + "px";
            div.removeChild(drop);
            drop = null;
            clearInterval(interval);
        }
    }, 10);

    function makeDrop() {
        const drop = document.createElement("div");
        for (let prop in styles) {
            drop.style[prop] = styles[prop];
        }
        div.appendChild(drop);
        return drop;
    }
}

function rain() {
    rainVar = setInterval(function () {
        makeRain();
    }, 10);

    btn.removeEventListener("click", rain);
    btnStop.addEventListener("click", stopRain);
}

function stopRain() {
    clearInterval(rainVar);

    btn.addEventListener("click", rain);
    btnStop.removeEventListener("click", stopRain);
}