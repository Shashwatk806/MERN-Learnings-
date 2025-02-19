
// function something(){
//     console.log("ohk pressed");
// }

//---------------------------------
// 2nd way
// let btn = document.querySelector('button');
// btn.onclick = function something(){
//     console.log("le!! ho gya click")
// }

// interview ques----------------------
let btn = document.querySelector('button');

function naacho(){
    console.log("naatu naatu")
}

function gaao(){
    console.log("sa re ga maa");
}
//ek event pe ek kam
// btn.onclick= naacho;
// btn.onclick = gaao; // it will override here


//for multiple kam
// 3rd way---- 
// addEventListener();

// btn.addEventListener('click',function(){
//     console.log("event chal gya");
// })

btn.addEventListener('click',naacho);
btn.addEventListener('click',gaao);


