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
    <MyComponent/>
  </div>
  );
}

function MyComponent(){

  let [list , setList] = useState(["Delhi", "Cucutta"]);

  let [thought, setThought]=useState("");//1

  const postyourThought = () => {
 
   //   const newList =["new Thoughts", ...list];
   const newList =[thought, ...list];
      setList(newList);

      ////clear input
      setThought("");
  };


  ///////////////4
  const handleInputChange = (e) =>{ 
     //   console.log(e.target.value);
        const newthought =  e.target.value;
        setThought(newthought);

       
  };
//enter 2
  const handleKeyEvent = (e) =>{
    console.log(e.key, e.keyCode);
    if(e.keyCode==13){
      console.log("User has pressed entered ");
      postyourThought();
    }
  }
  
  return(
     <div className= "m-2">
    <h1  className= "m-3 rounded sticky-top" >Work with mini fiorms</h1>

    <input 
    type="text"
     className="form-control form-control-lg my-3"
      style={{height :75}}
       placeholder="post your thoughts"
       value={thought} //2
       onChange={handleInputChange} ///////////3
       onKeyDown={handleKeyEvent}  //enter 1
        />
  <input type="button"
   value= "Post your thoughts"  
   className= "btn btn-outline-primary"
   onClick={postyourThought}/>

   <div className="h1 bg-light m-1 p-3 text-dark">Whats on your mind</div>

    {list.map( (item)=> {
        return  <div className="alert alert-primary mb-2 border">{item}</div>
    })}

  
  
  </div>
  );
}