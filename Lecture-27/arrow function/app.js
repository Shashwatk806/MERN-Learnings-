
//normal function
function sum(a,b){
    return a+b;
}
console.log(sum(4,5));

// arrow function 
//way-1
let sum2 = (a,b)=>{
    return a+b;
}
console.log(sum2(2,3));

//way-2 -> when only one line of code to return
// let sq = (num) =>{
//     return num*num;
// }
//--------------or----------
// let sq = (num) => num*num;

// console.log(sq(2));

//way -3 when only one argument
 let sq = num => num*num;
 console.log(sq(4));

