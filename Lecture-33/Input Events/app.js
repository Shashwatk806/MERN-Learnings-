
let inputEle = document.querySelector('input');

//input
// inputEle.addEventListener('input', ()=>{
//     console.log("typing...")
// })


inputEle.addEventListener('input',(event)=>{
    // console.log(event); // object
    // console.log(event.target); // target
    console.log(event.target.value); // value(only for inputs not for texts)
    // console.log(event.data); //shows last entered text
})








