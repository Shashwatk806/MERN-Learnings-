
const imgEl = document.querySelector('img');
let arr = [
    "https://images.unsplash.com/photo-1731761844955-1864d0ff33ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1731669767156-edd0457d48ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1462524653740-777d166c975e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1698405316329-fd9c43d7e11c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
]

let num = 0;
let stopId = setInterval(function(){
    imgEl.setAttribute('src',arr[num])
    num = (num+1)%arr.length;
},3000)

setTimeout(function(){
    clearInterval(stopId);
},30000);



















