import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {HelloWorld} from "./pages/HelloWorld";
import {helloUniverse} from "./pages/helloUniverse";
import { BrowserRouter,Route, Link } from "react-router-dom";
import { func } from "prop-types";


export default function App() {

 return (
 <BrowserRouter>

 <Link to="/page1"> <h1>Page1</h1> </Link>
 <Link to="/page2"><h1>Page2</h1></Link>
 <Link to="/page3"><h1>Page3</h1></Link>
 <Link to="/hw"><h1>Page3</h1></Link>
 <Link to="/hu"><h1>Page3</h1></Link>

 <h1>Something Something</h1>
<Route exact={true} path="/page1" component ={Page1} />
<Route exact={true} path="/page2" component ={Page2} />
<Route exact={true} path="/page3" component ={Page3} />
<Route exact={true} path="hw" component ={HelloWorld} />
<Route exact={true} path="/hu" component ={helloUniverse} />
<Route exact={true} path="/" component ={Page1} />

 </BrowserRouter>
 
 );
}

function NavMenu(){
  
}

function Page1(){
  return(
<div>
<h1>Page1 Goa</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aspernatur nihil, sed eligendi vel asperiores necessitatibus adipisci corrupti provident non sapiente autem illum doloremque obcaecati esse odio, nisi veritatis minima?
</p>
  </div>
  )
}



function Page2(){
  return(
<div>
<h1>Page2 Dubai</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aspernatur nihil, sed eligendi vel asperiores necessitatibus adipisci corrupti provident non sapiente autem illum doloremque obcaecati esse odio, nisi veritatis minima?
</p>
  </div>
  )
}


function Page3(){
  return(
<div>
<h1>Page3 Miami</h1>
<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aspernatur nihil, sed eligendi vel asperiores necessitatibus adipisci corrupti provident non sapiente autem illum doloremque obcaecati esse odio, nisi veritatis minima?
</p>
  </div>
  )
}


