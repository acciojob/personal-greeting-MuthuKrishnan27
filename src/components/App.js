
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [text,setText] = useState("");
  function change(event){
    setText(event.target.value);
  }
  function check(){
    if(text!==""){
      return <p>Hello {text}!</p>
    }
  }
  console.log(text);
  return (
    <div>
        {/* Do not remove the main div */
          <label>Enter your name : 
          <input type="text" onChange={change}></input>
          </label>
        }
        {check()}
    </div>
  )
}

export default App
