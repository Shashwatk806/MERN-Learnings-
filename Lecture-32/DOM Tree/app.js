
let div = document.querySelector('div');

// // 1. children
// console.log(div);
// console.log(div.children);
// console.log(div.children[0]); // bcs this is an array(html collection);
// console.log(div.children[1]);

let art = document.querySelector('article');

//     console.log(art);
//     console.log(art.children);
//     console.log(art.children[0].children[0].children[0]);


// 2. parent

console.log(div.parentElement);
console.log(div.parentElement.parentElement);
console.log(div.parentElement.parentElement.parentElement);
console.log(div.parentElement.parentElement.parentElement.parentElement);
console.log(div.parentElement.parentElement.parentElement.parentElement.parentElement);

// sibling
console.log(art.nextSibling);
console.log(art.nextSibling.nextSibling);
console.log(art.nextSibling.nextSibling.previousSibling);













