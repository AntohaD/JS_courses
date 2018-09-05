"use strict";

let userDrink = prompt("What drink do you want?",
"Cola, Tea, etc.");

switch (userDrink) {
    case "Cola":
        alert("Excelent! Maybe add ice in " + userDrink);
        break;
    case "Tea":
    case "Coffe":
        alert(`Good! ${userDrink} with sugar or not?`);
        break;
    case "Beer":
    case "Wine":
    case "Vodka":
        let age = confirm("You have 18 years? :) ");
        if (age) {
            alert("Are you sure? Maybe Tea?")
        } else {
            alert("Sorry, in your age we recommended drink milk :)")
        }
        break;

    default:
        alert(`Sorry, we don't have ${userDrink}`)
        break;
}

