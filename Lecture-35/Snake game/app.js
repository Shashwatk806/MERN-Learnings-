
// let canvas = document.querySelector('canvas');  //board
// let ctx = canvas.getContext('2d');  //brush

// let cellSize = 40;
// let boardWidth = 800;
// let boardHeight = 500;

// //snakes rectangular shape
// // let snakeCells = [[0,0] ,[50,0],[100,0]];
// let snakecells = [[0,0]];

// //snake ko draw 
// function draw(){
//     //erase puri board
//     ctx.clearRect(0,0,boardWidth,boardHeight);
//     for(let cell of snakecells){
//         ctx.fillStyle = 'red';
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
//     }

// };

// //snake will update after sometime
// function update(){
//     let headX = snakecells[snakecells.length-1][0];
//     let headY = snakecells[snakecells.length-1][1];

//     let newHeadX = headX + cellSize;
//     let newHeadY = headY;

//     snakecells.push([newHeadX,newHeadY]);
//     snakecells.shift();
// };

// setInterval(function(){
//     update();
//     draw();
// }, 200)

//--------------------------------------------------------------
//Step-3

let canvas = document.querySelector('canvas');  //board
let ctx = canvas.getContext('2d');  //brush

let cellSize = 40;
let boardWidth = 800;
let boardHeight = 500;
let direction = 'right';

//snakes rectangular shape
// let snakeCells = [[0,0] ,[50,0],[100,0]];
let snakecells = [[0,0]];

//snake ko draw 
function draw(){
    //erase puri board
    ctx.clearRect(0,0,boardWidth,boardHeight);
    for(let cell of snakecells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
    }
    ctx.fillStyle = "green";
    ctx.fillRect(food[0],food[1],cellSize,cellSize);

};

// food generate
function foodGenerate(){
    return [ Math.round((Math.random()*(boardWidth-cellSize))/cellSize)*cellSize , 
        Math.round((Math.random()*(boardHeight-cellSize))/cellSize)*cellSize ]
}
let food = foodGenerate();
//snake will update after sometime
function update(){
    let headX = snakecells[snakecells.length-1][0];
    let headY = snakecells[snakecells.length-1][1];

    // let newHeadX = headX + cellSize;
    // let newHeadY = headY;

    let newHeadX;
    let newHeadY;
    if(direction === 'right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
    }else if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
    }else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
    }else{
        newHeadX = headX;
        newHeadY = headY + cellSize;
    }

    snakecells.push([newHeadX,newHeadY]);
    if(food[0] === newHeadX && food[1] === newHeadY){
        food = foodGenerate();
    }else{
        snakecells.shift();
    }

};

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowUp'){
        direction = 'up'
    }else if(event.key === 'ArrowRight'){
        direction = 'right';
    }else if(event.key === 'ArrowDown'){
        direction = 'down';
    }else{
        direction = 'left';
    }
})

setInterval(function(){
    update();
    draw();
}, 300)








