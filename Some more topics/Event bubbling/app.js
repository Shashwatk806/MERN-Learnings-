
// Event bubbling 
let outerDiv = document.querySelector('.outer');
let innerDiv =document.querySelector('#inner');
let btn = document.querySelector('#btn');

outerDiv.addEventListener('click', ()=>{
    console.log('outer clicked');
})

innerDiv.addEventListener('click', ()=>{
    console.log('inner clicked');
})

btn.addEventListener('click', ()=>{
    console.log('button clicked');
})

// to prevent bubbling 
innerDiv.addEventListener('click', (e)=>{
    e.stopPropagation();
})  