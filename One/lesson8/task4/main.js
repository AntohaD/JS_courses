/* При нажатии на кнопку в консоли выводится информация о том, сколько прошло секунд с момента нажатия.
Сделать так, чтобы на 10-й раз setInterval() завершил свою работу.
Напомню, для остановки есть clearInterval(), нужно применить его правильно */

const btn = document.getElementsByTagName("button").item(0);
let counter = 0;

btn.addEventListener("click", function () {

    setInterval(function () {
        counter++;
        if (counter <= 10) {
            console.log("Прошло " + counter + " секунд");
        } else {
            clearInterval();
        }
    }, 1000);

});