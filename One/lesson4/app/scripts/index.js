// const students = ["Vova", "Max", "Natalia"];
// students[1] = "Artem";
// students[3] = "Mykhailo"
// console.log(students);
// console.log(students.length);

// const arr = new Array(10, 20, 30);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce(function(accumulator, value) {
    return accumulator + value;
});

console.log(sum/numbers.length);

console.log(numbers);