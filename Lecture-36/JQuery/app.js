
// console.log($); // --> $ == jQuery;

//selection
// we have only one way --> $
// let h1 = $('h1') //  it will replace --> document.querySelectorAll('h1');
// console.log(h1);
// // for id
// let idd = $('#sam');
// // for class
// let klas = $('.samarth');


// let para = $('p');
// console.log(para);

//manipulation --------------------
// para.css('color','red');
// para.css('border','2px solid black');
// para.css('background-color','yellow');

// better approach
//  para.css({
//     color: 'blue',
//     fontSize:'30px',
//     border: '3px solid green',
//     backgroundColor : 'pink'
//  })


// let para = $('p');

// // accessing text
// //Getter
// console.log(para.text()); //brainless --> textContent
// // Settter
// para.text("I am going to Delhi");

// getter + setter
// console.log(para.html());

//----------attributes--------- 
// // attr(); -> works as getter and setter both
// let inp = $('input');
// // getAttribute/ getter
// console.log(inp.attr('type'));
// console.log(inp.attr('id'));
// // setAttribute/ setter 2 kam -> (jis, jisse)
// inp.attr('type' , 'color');
// inp.attr('type','date');
// inp.attr('type','checkbox')

//--------------------------------
//selecting first and last element
// let lis = $('ul li');
// let lis = $('ul li').first();
// lis.css('color' , 'green');

// let liss = $('ul li').last();
// liss.css('color','red');

//--------------------------------------------
// .val() -> acts like a getter and setter

let inp = $('input');
console.log(inp.val()); // getter
inp.val("mai nhi btaunga"); // setter


























