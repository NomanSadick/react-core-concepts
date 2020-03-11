import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a react Person </h1>
        <Person name="rubel"></Person>
        <Person name="Masum"></Person>

      </header>
    </div>
  );
}
function Person(props){
  return(
    <div>
        <h2>My Name:{props.name}</h2>
    </div>
  )

  
}


export default App;
