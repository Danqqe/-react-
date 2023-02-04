import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[pomenat,setChange]=useState(true)
  let name1
  if(pomenat){
    name1={
      backgroundColor:"black"
    }
  }else{
    name1={
      backgroundColor:"white"
    }
  }
  return <div style={name1}>
  <input type="checkbox" checked={pomenat} onChange={() => setChange(!pomenat)}/>
  </div>
}
// function App() {
//     const[value,setValue]=useState(1)
//     let message;
//     if(value=="1"){
//       message=<h2>я не понял</h2>
//     }else{
//       message=<h2>как оформить цвет</h2>
//     }
  
  
  
//     return <> 
//     <input type="checkbox" checked={value=="1" ? true:false} onChange={() => setValue(!value)}/>
//     <p>{message}</p></>
  
//     ;
  
// }

export default App;
