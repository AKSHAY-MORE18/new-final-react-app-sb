import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from "./pages/HelloWorld";
import {helloUniverse} from "./pages/helloUniverse";
import { BrowserRouter,Route, Link } from "react-router-dom";
import { func } from "prop-types";


export default function App() {

 return 
(
  <div>
    <MyComponent/>
  </div>
);
 
}

function MyComponent(){
let [list,setList]=useState(["delhi","mumbai"])

  return(
    <div className="m-2">
    <h1 >Work with the forms</h1>

    <input type="text" className="form-control form-control-lg my-3"
      placeholder="post your thoughts"/>

    <input type="button" className="btn btn-primary w-100mt-1" value="post your thought" />

    {list.map((item) => {
        return <div className="alert alert-primary mt-2">Delhi</div>
    })}

   <div className="h1 bg-primary my-1 p-2 text-light">AThought list</div>


  </div>
  );
}


