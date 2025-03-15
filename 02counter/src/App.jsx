import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  //let counter=5;
  const addValue=()=>{
    console.log("Clicked", counter)
    counter=counter+1;
    setCounter(counter)
  }
  const removeValue=()=>{
    counter=counter-1;
    setCounter(counter)
  }

  return (
    <>
     <h1>React Project</h1>
     <h2>Count Value:{counter}</h2>
     <button onClick={addValue}>Add Value{counter}</button><br/>
     <button onClick={removeValue}>Remove value{counter}</button>
     
      
    </>
  )
}

export default App
