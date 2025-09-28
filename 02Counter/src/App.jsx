import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
 const addvalue = () => {
  setCounter((prevcounter) => prevcounter+1)
setCounter((prevcounter) => prevcounter+1)
setCounter((prevcounter) => prevcounter+1)
 }
 const removevalue = () => {
  setCounter(counter-1)
 }

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter {counter}</h2>
      <button onClick={addvalue}>ADD VALUE:{counter}</button>
      <br />
      <button onClick={removevalue}>remove VALUE:{counter}</button>

    </>
  )
}

export default App
