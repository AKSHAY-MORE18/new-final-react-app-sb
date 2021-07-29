import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {

 let [counter, setCounter] =useState(0);
 let [list, setList] = useState(["Delhi", "mumbai"])

 let updateCounter = () =>{
  //  alert("Something is happening");
   let newvalue = counter+1;
   setCounter(newvalue);
 };

 let addNewElement = () => {
  //  alert("Something is ja")
  let newlist =["I am new Post", ...list];
  setList(newlist);
 }


return (
  <div>
    <h1>Statefull counter</h1>
    <h1>Counter:: {counter} 
    <input type="button" value="Increment" onClick={updateCounter} />
    </h1>
    <hr />


    <input type="button" value="Add new Element in list" onClick={addNewElement} />

{list.map((item)=>{
return <div className="alert alert-success p-2 ">{item}</div>
})}
   
  </div>
);
}

export default App;
