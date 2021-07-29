import logo from './logo.svg';
import './App.css';

function App() {
  let title = "Heloo world";
  let list = ["delhi", "cucutta", "mumbai", "Chennai", "pune", "lonaval"];
  return(
  <div>
<h1>{title}</h1>
<ul>
{list.map((item)=>{
return <li>{item}</li>;
})}
</ul>
    </div>
  );
}

export default App;
