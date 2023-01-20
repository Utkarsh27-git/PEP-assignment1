import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './components/Welcome.css';
import Welcome from "./components/Welcome";
function App() {

  const [name, setName] = useState("")
  const [login, setlogin] = useState(false)
  return (
    <div className="container">
      <div>
        <label>Enter your Name</label>
        <input
        placeholder='Enter your name'
        value={name}
        onChange={(event)=>{setName(event.target.value)}}></input>
      </div>
      <div><button onClick={()=>{setlogin(!login)}}>Login</button></div>
      {(login && name ) && <Welcome name={name} ></Welcome>}
      <p>Assignment done by Utkarsh Solanki 12008171</p>
    </div>
  );
}

export default App;
