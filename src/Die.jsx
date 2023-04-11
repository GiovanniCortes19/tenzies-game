import { useState } from "react"

export default function Die(props){

    const [dots, setDots] = useState(Array(props.value).fill('dot'))

    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }

    const diceDots = dots.map(dot => <span className="dot"></span>)

    return (
        <div onClick={props.holdDice} className={`die die-${props.value}`} style={styles}>
            {diceDots}
            {/* <h2 className="die-num">{props.value}</h2> */}
        </div>
    )
}