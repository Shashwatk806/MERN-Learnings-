
// function sum(num1, num2){
//     console.log(num1+num2);
// }
// sum(4,5);
// sum("sam","vohra");
// sum(true,false);

// function a(fn){
//     console.log("mai hu a");
//     fn(); //calling is imp for call back fun
// }

// function b(){ // call back fun
//     console.log("mai hu b")
// }
// a(b); // we can call function as parameter in JS
// a is HOF
// ----------or------------

// a(function b(){
//     console.log("mai hu b")
// });
// both way are same.

//---------------------------------------------

// function a(){
//     console.log("inside a")
//     function b(){
//         console.log("inside b")
//     }
//     return b;
// }
// let temp = a();
// temp();
//----------------USE CASE----------------
//normal
// let arr = ["sam", 100, "bhaukal", true, 400, false];
// we have to separate string, number, boolean values

// function getString(){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'string'){
//             res.push(item);
//         }
//     }
//     return res;
// }
// function getNumber(){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'number'){
//             res.push(item);
//         }
//     }
//     return res;
// }function getboolean(){
//     let res = [];
//     for(let item of arr){
//         if(typeof(item) === 'boolean'){
//             res.push(item);
//         }
//     }
//     return res;
// }
// console.log(getString());
// console.log(getNumber());
// console.log(getboolean());

//---------by using HOF---------------
let arr = ["sam", 100, "bhaukal", true, 400, false];
  
function getString(item){
    return typeof(item) === 'string';
}
function getNumber(item){
    return typeof(item) === 'number';
}function getBoolean(item){
    return typeof(item) === 'boolean';
}

function get(arr, fn){
    let res = [];
    for(let item of arr){
        if(fn(item)){
            res.push(item);
        }
    }
    return res;
}
console.log(get(arr,getString));
console.log(get(arr,getNumber));
console.log(get(arr,getBoolean));

