import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Quizz } from './components/Quizz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Quizz/>
    </div>
  )
}

export default App
