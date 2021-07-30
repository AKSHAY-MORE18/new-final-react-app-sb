import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from "./pages/HelloWorld";
import {helloUniverse} from "./pages/helloUniverse";
import { BrowserRouter,Route, Link } from "react-router-dom";
import { func } from "prop-types";

function App(){
  return(
  <div>
    
    <MyComponent  heading="java" desc="java is cool"/>
    <MyComponent  heading="javascript" desc="i am hot "/>
    <MyComponent  heading="python" desc="i am sexy"/>
  </div>
  )
}

function MyComponent({heading,desc}){
  return(
    <div className= "bg-dark p-3 text-light mb-1">
<h1>learning {heading}</h1>
<hr />
<p>
<mark className ="rounded bg-warning">{desc}</mark>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quisquam doloremque minus obcaecati, repellat adipisci nam impedit consequatur exercitationem corporis tempore eos omnis delectus sit pariatur libero incidunt quae at?
</p>
      </div>
  )
}

export default App;
