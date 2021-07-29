import logo from "./logo.svg";
import "./App.css";

function App() {
  let list = ["heloo world", "helo"];
 
  const addNewHello = () => {
   // alert("Add new logic will come here ....")
   list.push("hello");

   console.log(list)

  };
  return (
    <div>
      <h1>Working with the events</h1>
      <input type="button" value="Say hello" onClick ={addNewHello}/>


      {list.map((item)=>{
        return <h3>{item}</h3>
      })}
    </div>
  );
}
export default App;
