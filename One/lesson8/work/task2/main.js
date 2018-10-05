// let start = Date.now();
// let finish = 0;

// setTimeout(() => {
//     finish = Date.now();
//     console.log(finish - start);
// }, 1000);
// setTimeout(() => { console.log(2) }, 1000);

// console.log(3);


// *****************************************
// const test = setTimeout(function() {
//     console.log('Welcome');
// }, 1000);

// const userAge = +prompt();

// if (userAge < 18) {
//     clearTimeout(test);
// }


// *****************************************
// const div = document.createElement('div');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'blue';
// div.style.position = 'absolute';
// div.style.left = '0px';
// document.body.appendChild(div);

// const interval = setInterval(function() {
//     let x = parseInt(div.style.left);
//     if (x > 200) {
//         clearInterval(interval);
//     } else {
//         x += 10;
//     }
//     div.style.left = x + 'px';
// }, 1000);




// ******************************************
new Promise(function(okay, notokay) {
    setTimeout(function() {
        if (confirm('How are you')) {
            okay();
        }
        notokay();
    }, 1000);
})
.then(function() {console.log('Go drink beer');}, 
      function() {console.log('Go drink vodka');}
    );