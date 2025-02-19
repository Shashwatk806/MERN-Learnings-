
//querry selector

let p = document.querySelector('p');

//inner text  -> getter + setter
console.log(p.innerText); // brainful -> can read css (aware of styling)

//text content -> getter + setter
console.log(p.textContent); // brainles -> cant read css(unawre of styling);
    
//inner htlm -> getter + setter
console.log(p.innerHTML); // brainful -> read css + shows tags too

//setter
p.innerText = "my name is sam";
p.textContent = "my name is <h2>good</h2> samarth";
p.innerHTML = "hello I am <h2>bhaukali</h2> baba"

























