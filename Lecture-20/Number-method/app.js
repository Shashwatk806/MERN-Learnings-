
// 1. length 
// let num = 9999;
// console.log(num.length); 
// console.log(num.length()); both are not possible

// 2. Math
// console.log(Math);
// // since Math is an object in JS so we can use dot notation.
// console.log(Math.LN2);  // 0.69
// console.log(Math.LN10);// 2.30
// console.log(Math.PI);   // 3.14

// // object of Math 
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.round(4.3));
// console.log(Math.round(4.8));
// console.log(Math.pow(2,5));

// random
// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random()*10)); // 0 - 9

// console.log(Math.floor(Math.random()*95)+5) ; // 5-99

// generate 4 digit otp
// [1000,10000); range will be 1000 to 9999;
// RN = 9999-1000+1 = 9000; 
console.log(Math.floor(Math.random() * 9000) +1000);


