import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from './pages/HelloWorld/'
import {helloUniverse} from './pages/helloUniverse/'


export default function App() {

 return (
 <div>
     <HelloWorld/ >
     <HelloWorld />
      <helloUniverse />
 </div>
 
 );
}



