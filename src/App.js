import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {

const makeAjaxBackeendApiCall = async ()=>{
  const url= "https://jsonplaceholder.typicode.com/posts"
  const result = await axios.get(url);   
  console.log(result.data);
};

  return (
    <div>
      <h1>Lets connect to the backend</h1>
      <input type="button" values="Make backend call" />
    </div>
  );
}
