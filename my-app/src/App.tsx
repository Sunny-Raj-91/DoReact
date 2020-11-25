import React from 'react';
import './App.css';
//import Form from './components/Form';
// import Hello from './components/Hello';
// import HomePage from './components/HomePage'
import NameList from './components/NameList';
import ParentRef from './components/ParentRef';

function App() {

//   const clickMe = (message:string)=>{
//    console.log(message);
//   }
// const helloWorld = function(message:string){
// console.log(message)
// }
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Hello name='Sunny' click = {clickMe} fn = {helloWorld}/> */}
      {/* <HomePage/> */}
      <NameList/>
      <ParentRef/>
    </div>
  );
}

export default App; 
