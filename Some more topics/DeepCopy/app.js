
//Case -> 1 -> without any logic
// let original = {
//     name : "Prince",
//     age : 20,
//     address : { city:"Noida"}
// }

// let deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.address.city = "Mumbai";
// console.log(original.address.city);
// console.log(deepCopy.address.city); // it will not change the original -> here the actual copy of the object will be created

// Case-2 

let original ={a:1, b:2, c:{d:10}};

function deepCopy(obj){
    if(obj===null || typeof obj !== 'object'){
        return obj;
    }
    if(Array.isArray(obj)){
        return obj.map(deepCopy);
    }
    let copied = {};
    for(let key in obj){
        copied[key] = deepCopy(obj[key]);
    }
    return copied;
}

let copy = deepCopy(original);
console.log(copy);
