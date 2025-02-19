
// let a = 10; //declare
// console.log(a); //access --> No hoisting
// function b(){ //define
//     console.log("My name is Prince");
// }
// b(); //access --> no hoisting

//------------------------------------------
// let a;
// console.log(a); // access --> no hoisting bcs a is edclared before access
// a = 10;
// function b(){
//     console.log("my name is Prince")
// }
// b(); // no hoisting

//------------------------------------------------
// const a = 20;
// console.log(a);
// // a = 100;    // reinitialise --> invalid syntax
// function b(){
//     console.log("my name is Prince")
// }
// b(); 

//--------------------------------------------

// console.log(a);
// // let a = 20;
// function b(){
//     console.log(b);
// }
// b();
// this will give error a is not defined
//---------------------------------------------
// console.log(a);
// let a = 20;
// function b(){
//     console.log(b);
// }
// b();
// this will give error cannt access  a before initialization;

//---------------------------------------------

// console.log(a);
// var a;
// a = 1000;
// console.log(a); ans--> undefined 1000;

console.log(a);
let a;
a = 1000;
console.log(a);
//  ans Option
//  1.error  --> this will be ans bcs JS is a interpreted language.(next line will not run)(DTZ-> dead temporal zone)
//  2. 1000 error 
//  3. undefined 1000
//  4. 1000 1000 






