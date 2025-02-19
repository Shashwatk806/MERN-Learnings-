
let sec = document.querySelector('section');

let h2 = document.createElement('h2');
let p = document.createElement('p');

h2.innerText = 'samarth';
p.innerText = "my name is prince";

// sec.appendChild(h2);
// sec.appendChild(h2,p); -> wrong cant give multiple in this
// sec.appendChild("hi"); -> wrong (cant give string)

// //append();
// sec.append(h2);
// sec.append(h2,p) // yes
// sec.append("hello from tom") //yes 
// sec.append("<h1>hello from tom</h1>") //no it will read it like string

// to add in start
//prepend();
// sec.prepend("hello from tom") //yes 
// sec.prepend(p,h2);
// sec.prepend("hello from tom",p)


// before and after
sec.before(h2);
sec.after(p);









