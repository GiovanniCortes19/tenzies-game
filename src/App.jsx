import Die from "./Die"
import { useState } from "react"


function App() {

  const [diceNumbers, setDiceNumbers] = useState(allNewDice())

  function allNewDice(){
    const diceArray = [];
    for (let i = 0; i < 10; i++){
      diceArray.push(Math.ceil(Math.random()*6))
    }
    return diceArray
  }

  const dice = diceNumbers.map(value => {
    return <Die value={value}/>
  })

  return (
    <main className="main">
      <div className="dice-container">
        {dice}
      </div>
    </main>
  )
}

export default App
