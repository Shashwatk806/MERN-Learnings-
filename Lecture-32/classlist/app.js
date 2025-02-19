
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

//add
// h1.classList.add('class1');
// h1.classList.add('class2');
// h1.classList.add('class3');
//---------or-------------
h1.classList.add('class1', 'class2', 'class3');

//remove
h1.classList.remove('class3');

// toggle -> on or off
h1.classList.toggle('class2');

// contains -> true or false
console.log(h1.classList.contains('class1'));






















