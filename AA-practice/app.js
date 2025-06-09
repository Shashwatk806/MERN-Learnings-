
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let data = inp.value;
    // console.log(data);
    let li = document.createElement('li');
    li.innerHTML= data;
    ul.append(li);
    inp.value = "";
    li.addEventListener('click',function(){
        li.remove();
    })
})
