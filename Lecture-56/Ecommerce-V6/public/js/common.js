
let allLikeBtn = document.querySelectorAll('.like-btn');

function likeButton(){
    console.log('like the button')
}

for(let btn of allLikeBtn){
    btn.addEventListener('click',()=>{
        likeButton();
    })
}




