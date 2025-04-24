import Bhai from "./Components/Bhai";
import Hello from "./Components/Hello";
import Homie from "./Components/Homie";
import Sam from "./Components/sam"

function App(){
  // upper part -> where we write js 
  let a = 100;


  // lower part ->expressions -> map,ternary-> where we return and it always return in jsx type
  return ( 
    <div>
      <Bhai />
      {/* <Homie /> */}
      {/* <Sam /> */}
      {/* <sam></sam> */}
      {/* <Hello /> */}
      {/* <div>
    <h1>Hello from react-app</h1>
    </div> 
    <h1>hello again</h1>
    <h1>hello {a} </h1>  */}
    </div>
  
    ); // while return it must be having the single parent
}



export default App; // 1.default exports ✔
