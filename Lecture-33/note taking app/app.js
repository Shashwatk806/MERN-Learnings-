
let inputEle = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');

btn.addEventListener('click', function(event){
    let noteText = inputEle.value;
    let li = document.createElement('li');
    li.innerText = noteText; 
    list.appendChild(li);
    inputEle.value = "";

    li.addEventListener('click', ()=>{
        li.remove();
    })
})








