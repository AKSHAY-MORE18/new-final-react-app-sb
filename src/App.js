import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from "./pages/HelloWorld";
import {helloUniverse} from "./pages/helloUniverse";
import { BrowserRouter,Route, Link } from "react-router-dom";
import { func } from "prop-types";

 export default function App(){
  return(
  <div>
 <MyComponent/>
  </div>
  )
}

function MyComponent(){

  const clickHandler=(e) =>{
    console.log(e);
    alert("something is happening",e)
  }
  return(
     <div>
       <h1>Hello World</h1>

       <input type="button" value="CLICK ME" onClick={clickHandler} />

       <input type="button" value="CLICK ME" onClick={clickHandler} />

    </div>
  )
}

