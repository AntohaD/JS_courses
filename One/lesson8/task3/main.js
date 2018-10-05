/* сделать проверку: если пользователь ввёл 10 или больше 10-ти 
символов, то СРАЗУ выводить сообщение, что он молодец и обрывать 
выполнение setTimeout(). Если он ввёл меньше 10-ти символов, 
то через 5 секунд ему выведет информацию, что слишком мало букв. */

const inp = document.getElementsByTagName("input").item(0);

inp.addEventListener("change", function () {
        let fun = setTimeout(function () {
            console.log("слишком мало букв");
        }, 5000);
        
        if (inp.value.length > 10) {
        console.log("молодец");
        clearTimeout(fun);
    }
});