import { useState } from 'react'
import { createCalculator } from './lib/Calculator'
import './App.css'

function App() {
  
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [result, setResult] = useState('')

  function add() {
    setResult(createCalculator().add(Number(a), Number(b)))
  }
  function subtract() {
    setResult(createCalculator().subtract(Number(a), Number(b)))
  }
  function multiply() {
    setResult(createCalculator().multiply(Number(a), Number(b)))
  }
  function divide() {
    setResult(createCalculator().divide(Number(a), Number(b)))
  }

  return (
    <div>
      <h1>Calculator</h1>
      <input
       
        value={a}
        onChange={e => setA(e.target.value)}
        placeholder="A number"
      />
      <input
       
        value={b}
        onChange={e => setB(e.target.value)}
        placeholder="Another number"
      />
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div>
      <p>Result: {result}</p>
    </div>
  )
}

export default App