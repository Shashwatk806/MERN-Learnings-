
let input = document.querySelector('input');

function debounce(fn, delay){
    let timerID;
    return function(...arg){
        clearTimeout(timerID);
        timerID = setTimeout(()=>{
            fn(...arg);
        },delay)
    }
}

function search(e){
    console.log(e.target.value);
}

const searchWithDebounce = debounce(search, 500);

input.addEventListener('input',searchWithDebounce);
