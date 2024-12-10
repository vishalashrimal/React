import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 5
  const addValue = () => {
    // counter = counter + 1;
    if(counter<=19){
      setCounter(prevcounter => prevcounter + 1)
      setCounter(prevcounter => prevcounter + 1)
      setCounter(prevcounter => prevcounter + 1)
    }else{
      counter = 20
    }
  }
  
  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    }else{
      counter = 0
    }
  }
  
  
  return (
    <>
      
      <h1>Hello World !</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}
      >Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
