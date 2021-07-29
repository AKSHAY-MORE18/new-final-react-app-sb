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
  return (

    <div className="bg-grey">
      <h1>helloworld</h1>

      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus? Laboriosam, quae voluptatem aut voluptate aliquid dolor voluptatum maiores corrupti deleniti, mollitia ut suscipit eum porro ipsa adipisci ex eius.
      </p>
    </div>
    );
}


function helloUniverse() {
  return (
  
  <h1 className="bg-primary text-light">Hello universe</h1>
}


