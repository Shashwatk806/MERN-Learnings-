
let playBtn = document.querySelector('#play-btn');
let progress = document.querySelector('#progress-bar');
let songList = document.querySelector('#song-list');

let songs = [
    {
        name:'Tere Hawale',
        id:1
    },{
        name:'Aayi Nahi',
        id:2
    },{
        name:'Aaj ki raat ',
        id:3
    },{
        name:'Tere liye',
        id:4
    }
];

let audio = new Audio('./assets/song1.mp3');

// show the song list in UI

for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id', song.id);
    li.classList.add('song-item');
    songList.append(li);
}

//play button ka icon change ho jaye and vice versa
playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play')
    }
})

// curret time k hisab se range chale
// for this we will use timeupdate 
    audio.addEventListener('timeupdate',()=>{
        let curretprogress = audio.currentTime*100 / audio.duration;
        progress.value = curretprogress;
    })

//drag kre se gana aage piche ho
progress.addEventListener('change' , function(){
    let updatedtime = audio.duration * progress.value / 100;
    audio.currentTime = updatedtime;
})    

// play song from selected list
songList.addEventListener('click' ,(event)=>{
    let songId = event.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');

})

let fwdBtn = document.querySelector('#fwd-btn');
let num = 1;

fwdBtn.addEventListener('click', (event)=>{
   num = (num%songs.length)+1;
    audio.src = `./assets/song${num}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');

})

let bwdBtn = document.querySelector('#bwd-btn');

bwdBtn.addEventListener('click', ()=>{
   num = (num-2 + songs.length) % songs.length+1;
    audio.src = `./assets/song${num}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');

})




