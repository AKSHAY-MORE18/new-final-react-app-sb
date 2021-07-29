import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

 let [counter, setCounter] =useState(0);

 let updateCounter = () =>{
  //  alert("Something is happening");
   let newvalue = counter+1;
   setCounter(newvalue);
 };


return (
  <div>
    <h1>Statefull counter</h1>
    <h1>Counter:: {counter} 
    <input type="button" value="Increment" onClick={updateCounter} />
    </h1>
   
  </div>
);
}

export default App;
