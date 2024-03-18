import { useState } from 'react'
import { calculateText } from './util'
import './App.css'

function App() {
  const [input, setInput] = useState<string>("")

  return (
    <div>
      <input type='text' onChange={(e) => setInput(e.target.value)} />
      <p>{calculateText(input)}</p>
    </div>
  )
}

export default App
