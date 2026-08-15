import React, { useState } from 'react'
import "./cards.css"

const Cards = ({ text }) => {
    
    const [value, setValue] = useState("")
    const [textVisible, setTextVisible] = useState(true)
    // const [count, setCount] = useState(0);

    var words=window.localStorage.getItem("words")
    const textappear = () => {
        setTimeout(()=>{(
            setValue(""),
            setTextVisible(false)
        )},950)
        setValue(text)
        setTextVisible(true)
        // setCount(1)
        // work()
    }

    return (
        <div className="card">
            <span style={{ cursor: 'pointer', visibility: textVisible ? 'visible' : 'hidden' }} onClick={() => {
                textappear()
                // work()
            }
            }>{value}</span>
        </div>
    )
}

export default Cards
