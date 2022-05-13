import {useState} from'react';

const App = () =>{

let opArray = ["+", "-", "*", "/"]

// DISPLAY: Hook for the button press when passing value to the 'display' variable
const [display, setDisplay] = useState("");

// DISPLAY: function to pass value of button press into the 'display' variable. Also, checks for duplicate operators
const changeDisplay = (value)=>{
  if (display.length > 10){
    return;
  } 
  console.log(display.slice(-1));
  if (opArray.indexOf(value)===-1){
    setDisplay(display + value);
    return;
  } 
  else if (opArray.indexOf(display.slice(-1))!==-1){
    return;
  }
  setDisplay(display + value);
    console.log(`The value is: ${display}`);
  }

// BUTTONS: Hook/Object for the numerical buttons on calculator
const numVal = [
  {n:1, id:1}, 
  {n:2, id:2}, 
  {n:3, id:3}, 
  {n:4, id:4}, 
  {n:5, id:5}, 
  {n:6, id:6}, 
  {n:7, id:7}, 
  {n:8, id:8}, 
  {n:9, id:9}
];

// BUTTONS: Generate numerical buttons on calculator from object
const keyVal = numVal.map(calcVal =>{
  return(
    <button key={calcVal.id} onClick={()=> changeDisplay(calcVal.n.toString())}>{calcVal.n}</button>
  );
});

// BUTTONS: Delete button to empty the value of the 'display' variable
const delDisplay = ()=>{
  setDisplay("");       
  console.log(`The value is: ${display}`);
}

/* CALCULATION: '=' button to trigger forumla which turns the exisiting 'display' string into an equation
before resolving the equation and then updating 'display' with the result */
const equalDisplay = ()=>{
  setDisplay(eval(display));
  console.log(`Calculator says: ${eval(display)}`);
}

  return (
    <div className="App">
      <div className="outsideCol"></div>

      <div className="calc">

        <div className="display">
        {display || "0"}
        </div>

        <div className="operators">
        {/* <button onClick={()=>{changeDisplay("111")}}>Test Button</button> */}
        <button onClick={()=>{changeDisplay("*")}}>*</button>
        <button onClick={()=>{changeDisplay("/")}}>/</button>
        <button onClick={()=>{changeDisplay("+")}}>+</button>
        <button onClick={()=>{changeDisplay("-")}}>-</button>
        <button id="delete" onClick={()=>{delDisplay()}}>DEL</button>
        </div>
     
        <div className="numbers">
        {keyVal}
        <button onClick={()=>{changeDisplay("0")}}>0</button>
        <button onClick={()=>{changeDisplay(".")}}>.</button>
        <button onClick={()=>{equalDisplay()}}>=</button>
        </div>
      </div>
    </div>

  )
  }

export default App;
