import Die from "./Die"
import { useState } from "react"
import {nanoid} from '../node_modules/nanoid'

function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice())

  function allNewDice(){
    const diceArray = [];
    for (let i = 0; i < 10; i++){
      diceArray.push(Math.ceil(Math.random()*6))
    }
    return diceArray
  }

  function rollDice(){
    setDiceNumbers(allNewDice())
  }

  const dice = diceNumbers.map(value => {
    return <Die value={value}/>
  })

  return (
    <main className="main">
      <div className="dice-container">
        {dice}
      </div>
      <button className="btn-rollDice" onClick={rollDice}>Roll Dice</button>
    </main>
  )
}

export default App
