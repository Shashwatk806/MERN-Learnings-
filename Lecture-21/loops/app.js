
// rather than for, while and do-while loop , there are 2 more loops in JS 

let arr = [10,20,30,40,50];
//with for loop
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//with while loop
// let i =  0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }
// with for-of loop
for(let item of arr){ // item is iterator i.e. arr[i];
    console.log(item);
}

// for-in loop
// they are used for objects
let obj = {
    eng : 80,
    hindi : 90,
    math : 75
}
for(let sub in obj){
    // console.log(sub); //key
    console.log(obj[sub]); // value
    console.log(obj.sub); // undefined
}

//------------------------------------------
// break and continue 

