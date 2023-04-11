import Die from "./Die"
import { useState } from "react"
import {nanoid} from '../node_modules/nanoid'

function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice())

  function allNewDice(){
    const diceArray = [];
    for (let i = 0; i < 10; i++){
      diceArray.push({value: Math.ceil(Math.random()*6), 
                      isHeld: false, 
                      id: nanoid()})
    }
    return diceArray
  }

  function holdDice(id){
    setDiceNumbers(oldDice => oldDice.map(die => {
      if (die.id === id) {
        return {...die, isHeld: !die.isHeld}
      } else {
        return die
      }
    }))
  }

  function rollDice(){
    setDiceNumbers(allNewDice())
  }

  const dice = diceNumbers.map(die => {
    return <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)} />
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
