
import React from 'react';
import './App.css';
//import ClickCounter from './components/ClickCounter';
//import ClickCounterTwo from './components/ClickCounterTwo';
//import HoverCounter from './components/HoverCounter';
//import HoverCountertTow from './components/HoverCountertTwo';
//import CounterRenderProp from './CounterRenderProp';
import UseEffectHook from './components/useEffectHookDemo'
//import TemperatureCalculator from './components/TemperatureCalculator';
//import Form from './components/Form';
// import Hello from './components/Hello';
// import HomePage from './components/HomePage'
// import NameList from './components/NameList';
// import ParentRef from './components/ParentRef';

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
      {/* <NameList/>
      <ParentRef/> */}
      {/* <ClickCounter/>
      <br></br>
      <HoverCounter/>
      <br></br> */}
      {/* <TemperatureCalculator/> */}
      {/* <CounterRenderProp render =  { (count,increment,stopIncrement) => <HoverCountertTow count = {count} increment = {increment} stopIncrement = {stopIncrement}/>} /> */}
      {/* <CounterRenderProp render =  { (count,increment,stopIncrement) => <ClickCounterTwo count ={count} increment = {increment} stopIncrement = {stopIncrement} />} /> */}
      <UseEffectHook name="fluffy"/>
    </div>
  );
}

export default App; 
