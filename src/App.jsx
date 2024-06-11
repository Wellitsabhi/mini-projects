import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* Accordion Component */}
      {/* <Accordion/> */}

      {/* Random color componenet */}
      {/* <RandomColor/> */}

      {/* Star Rating componenet */}
      <StarRating noOfStars={7}/>

      
    </div>
  )
}

export default App
