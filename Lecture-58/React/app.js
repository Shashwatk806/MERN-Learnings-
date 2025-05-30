
//DOM -> operatonally very heavy
// let rootEl = document.getElementById('root');
// let h1 =document.createElement('h1');

// h1.innerHTML = "Hello h1 from DOM";
// rootEl.append(h1);

//-------------------------------------------------
//React -> 
// let rootEl = document.getElementById('root');
// // let h1 = React.createElement('h1', null, "Hello h1 from React");
// let h1 = React.createElement(
//     'h1', 
//     {id:"sam", className:"vohra"}, // we cant directly class bcs it is a reserved keyword by js
//      "Hello h1 from React 18"
//     );

// // to display it
// // ReactDOM.render(h1,rootEl);
// let root = ReactDOM.createRoot(rootEl);
// root.render(h1);
// root.render(h1,h2); //wrong it accepts only one argument

//---------------------------------------------------

// let rootEl = document.getElementById('root');
// let h1 = React.createElement(
//     'h1', 
//     {id:"sam", className:"vohra"}, // we cant directly class bcs it is a reserved keyword by js
//      "Hello h1 from React 18"
//     );
//  let h2 = React.createElement(
//         'h2', 
//         null,
//          "Hello h2 from React 18"
//         );
// // to display it
// // ReactDOM.render(h1,rootEl);
// let root = ReactDOM.createRoot(rootEl);
// root.render([h1,h2]);

//-----------------------------------------------
//nested

// let rootEl =document.getElementById('root');
// let div = React.createElement('div', null,
//      [React.createElement('h1',null, 'hi I am h1 in div'),
//         React.createElement('p',null,'hi I am p in div')
//  ]);

// let root = ReactDOM.createRoot(rootEl);
// root.render(div)

// ------------------------------------------------
// JSX way

let rootEl= document.getElementById('root');
let div = (
    <div>
        <h1>Hi i am inside h1 of JSX</h1>
        <p>Hi i am inside p of JSX </p>
    </div>
);

let root = ReactDOM.createRoot(rootEl);
root.render(div);
