import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CakeContainer from './components/CakeContainer'
import ABC from './components/abc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeContainer />
      <ABC />
    </div>
  )
}

export default App
