import Die from "./Die"
import { useState } from "react"
import { useEffect } from "react"
import {nanoid} from '../node_modules/nanoid'
import Confetti from "react-confetti"

function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rollCount, setRollCount] = useState(0)

  useEffect(()=>{
      const allHeld = diceNumbers.every(die => die.isHeld);
      const valueCompare = diceNumbers[0].value
      const allSameValue = diceNumbers.every(die => die.value === valueCompare)
      if ( allHeld && allSameValue ){
        setTenzies(true)
      }
  }, [diceNumbers])

  function generateNewDie(){
    return {value: Math.ceil(Math.random()*6), 
            isHeld: false, 
            id: nanoid()}
  }

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
    setRollCount(oldCount => oldCount + 1)
    setDiceNumbers(oldDice => oldDice.map(die => {
      if (!die.isHeld) {
        return generateNewDie()
      } else {
        return die
      }
    }))
  }

  function resetGame(){
    setTenzies(false)
    setRollCount(0)
    setDiceNumbers(allNewDice())
  }

  const dice = diceNumbers.map(die => {
    return <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)} />
  })

  return (
    <main className="main">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      {tenzies ? <h3 className="winTitle">You Won! </h3> : <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
      {tenzies && <h4 className="totalRolls">Total Rolls: {rollCount}</h4>}
      <div className="dice-container">
        {dice}
      </div>
      {tenzies ? <button className="btn-rollDice" onClick={resetGame}>New Game</button> : <button className="btn-rollDice" onClick={rollDice}>Roll Dice</button>}
    </main>
  )
}

export default App
