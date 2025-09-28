import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:"srushty",
    age:21
  }
  let newarray = [1,2,3]

  return (
    <>
      <h1 className='bg-amber-400 text-black rounded-3xl'>tailwind test</h1>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Card username="srushty" btn_txt={"read more"}></Card>

    </>
  )
}

export default App
