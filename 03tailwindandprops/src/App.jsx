import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Vishal",
    age: 21
  }
  let myArr = [1,2,3]
  return (
    <>
      <p className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</p>
      
      <Card username="Chaiaurreact" btnText = "click me" />
      <Card username="Vishal" btnText = "visit me" />
    </>
  )
}

export default App
