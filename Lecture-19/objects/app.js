
// let todo = {}
// unordered DS

// let todo = {
//     // properties => key : value 
//     // key : value
//     title : "buy chocolate", // comma separation 
//     completed : false,
//     mickeymouse : "club house",
//     bike : 100
// }
// console.log(todo);

// Dot notation

let todo = {
    
    title : "buy chocolate", // comma separation 
    completed : false,
    mickeymouse : "club house",
    bike : 100
}
console.log(todo);
console.log(todo.bike);
console.log(todo['bike'])   // we can do both
console.log(todo.completed);
console.log(todo['completed'])

//wrong-ways
// console.log(todo[0]); this both will give undefined
// console.log(todo.0);

console.log(todo.completed);    //getter
todo.completed = true;  //setter
// todo['completed'] = true; //setter
console.log(todo.completed);    // this will give true

console.log(typeof(todo));