
// function sum(num1, num2){
//     return sum = num1+num2; // this will give NaN bcs undefined + undefined = NaN.
// }
// let output = sum();// no argument
// console.log(output); 

//-------------------------------------------------------

// function sum(num1, num2){
//     return sum = num1+num2; // NaN -> 10+undefined = NaN 
// }
// let output = sum(10); // 1 argument
// console.log(output); 

// ----------------------------------------------------

// function sum(num1, num2=20){
//     return sum = num1+num2; // 30
// }
// let output = sum(10); //  argument
// console.log(output);

//---------------------------------------------------

function sum(num1 = 40, num2=20){
    return sum = num1+num2; // 30
}
let output = sum(10); //  argument this will override value of 40 to 10 -> 10 + 20 = 30
console.log(output);