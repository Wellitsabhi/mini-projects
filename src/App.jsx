import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* Accordion Component */}
      {/* <Accordion/> */}

      {/* Random color componenet */}
      <RandomColor/>
    </div>
  )
}

export default App
