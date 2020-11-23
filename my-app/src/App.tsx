import React from 'react';
import './App.css';
import Hello from './components/Hello';
import HomePage from './components/HomePage'

function App() {

  const clickMe = (message:string)=>{
   console.log(message);
  }
const helloWorld = function(message:string){
console.log(message)
}
  return (
    <div className="App">
      <Hello name='Sunny' click = {clickMe} fn = {helloWorld}/>
      <HomePage/>
    </div>
  );
}

export default App; 
