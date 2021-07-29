import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {

 return (
 <div>
     <HelloWorld/ >
     <HelloWorld />
      <helloUniverse />
 </div>
 
 );
}
//hellow world is a tag name 
//tags :: Components :: Faolow Pascal case convention
function HelloWorld () {
  return <h1>Hello World</h1>;
}


function helloUniverse() {
  return <h1>Hello universe</h1>
}


