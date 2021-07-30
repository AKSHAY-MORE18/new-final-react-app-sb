import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from "./pages/HelloWorld";
import {helloUniverse} from "./pages/helloUniverse";
import { BrowserRouter,Route, Link } from "react-router-dom";
import { func } from "prop-types";


export default function App() {

  return  (
  <div>
    <h1>MyComponent</h1>
  </div>
  );
}

function MyComponent(){
  
  return(
     <div className= "m-2">
    <h1  className= "m-3">Work with the forms</h1>

    <input 
    type="text"
     className="form-control form-control-lg"
      style={{height :75}}
       placeholder="post your thoughts"
        />
  <input type="button"
   value= "Post your thoughts"  
   className= "btn btn-primary"/>
  
  </div>
  );
}