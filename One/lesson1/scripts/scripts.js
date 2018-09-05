"use strict";

var userName;
var userAge;
var userSalary;
const DEFAULT_AGE = 21;

//in this variable we write user name
userName = prompt("What your name?", "");
//in this variable we write user age
userAge = prompt("How old are you?", DEFAULT_AGE);

console.log(userName);
console.log(userAge);

userSalary = confirm("Are you satisfied with your salary?");

console.log(userSalary);

/*Here we use the condition to verify the user's response. 
  Depending on the answer, we show different variants.
*/
if (userSalary == true) {
    alert(userName + " " + "satisfied his salary " + ":)");
} else {
    alert(userName + " " + "do not satisfied his salary " + ":(");
}

