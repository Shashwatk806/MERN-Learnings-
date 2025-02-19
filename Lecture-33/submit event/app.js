
// let formEl = document.querySelector('form');
//  formEl.addEventListener('submit', (event)=>{
//     console.log("form submitted");
//  })

//----------------------------------------------
// to prevent the by deafult nature 
// let formEl = document.querySelector('form');
//  formEl.addEventListener('submit', (event)=>{
//     event.preventDefault(); //refresh nhi hoga
//     console.log("form submitted");
//  })

//-----------------------------------------
// to get the value of input Elements 

let formEl = document.querySelector('form');
 formEl.addEventListener('submit', (event)=>{
    event.preventDefault(); //refresh nhi hoga
    console.log(formEl.elements);
    console.log(formEl.elements[0]);
    console.log(formEl.elements[1]);
    console.log(formEl.elements[0].value);
    console.log(formEl.elements[1].value);
 })





