"use srtict";

// 7. Разверните массив без метода reverse(). 
// Если сможете, то сделайте это не используя создание дополнительных массивов, 
// а управляя лишь элементами одного и того же массива

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let len = arr.length;
for (let i = len-1; i >= 0; i--) {
    arr.push(arr[i]);
}

let size = arr.length;
for (let i = 0; i < size/2; i++) {
    arr.shift(arr[i]);
}

console.log(arr);