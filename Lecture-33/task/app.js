
let inputEle = document.querySelector('input');
let h = document.querySelector('h1');

inputEle.addEventListener('input',(event)=>{
    h.innerText = event.target.value;
})




