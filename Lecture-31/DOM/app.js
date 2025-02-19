
// using js it will manipulate html 
// selectors
// document -> html me se select kro is-is way se

//way-1 -> getElementById

// let element = document.getElementById(sam) -> wrong way 
// let element = document.getElementById('sam'); // right way
// console.log(element);
// when two tags are given the same id then it returns only 1 single entity -> first occurance

//---------------------------------------------------
//styling...
// alg alg same element pe properties apply krna    (we use camel case)
// element.style.color = "red";
// element.style.backgroundColor = "green";
// element.style.border = "5px solid black"

// ek sath element pe apply krna (we use backticks and kabab case)
// element.style.cssText = `
//     color : blue;
//     background-color : gold;
//     font-size : 50px;
// `
//-----------------------------------------------------------------------------
// way->2 getelementsByTagName  (returbs an array(html collection))

// document.getElementsByTagName(h1); //wrong way
// let allHeading = document.getElementsByTagName('h1'); //right way

// allHeading.style.color = "red"; // directly use nhi hoga -> use looping

// for(let heading of allHeading){
//     // heading.style.color = "red";
//     // heading.style.backgroundColor = "orange"
//     heading.style.cssText = `
//         color : red;
//         background-color : green;
//         font-size : 100px;
//     `
// }

// way->3 getElementsByClassName -> returns an array(html collection)
//  let clselem = document.getElementsByClassName("cls");
//  for(let element of clselem){
//     element.style.textDecoration = "line-through"
//  }

 //-----------------------------------------------------
//  way->4 querrySelector -> 3 in one kam krta hai -> only one element ko select krta hai (first occurance)
// id ->
//  let qs1 = document.querySelector('#sam'); //single selector
// className -> 
//  let qs2 = document.querySelector('.cls'); // single possible
// tagName -> 
// let qs3 = document.querySelector('p'); // single possible

//-----------------------------------------------------------
//  way->5 querrySelectorAll -> 3 in 1 kam krta hai -> all elements ko select krta hai 
// id -> 
let qs1 = document.querySelectorAll('#sam'); // select all
// className -> 
 let qs2 = document.querySelectorAll('.cls'); // select all
// tagName -> 
let qs3 = document.querySelectorAll('p'); // select all






















