"use strict";

let isEven = false;

while (!isEven) {
    let num = parseInt(prompt("Enter even number", 8));
    
    if (num%2 == 0) {
        isEven = true;
    }
}