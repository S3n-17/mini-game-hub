import React, { useState } from 'react'
import "./cards.css"

const Cards = ({ text }) => {
    
    const [value, setValue] = useState("");
    // const [count, setCount] = useState(0);

    var words=window.localStorage.getItem("words")
    const textappear = () => {
        setTimeout(()=>{(
            setValue("")
        )},1000)
        setValue(text)
        // setCount(1)
        // work()
    }

    // function work() {
    //     setValue("")
        
    // }
    return (
        <div>
            <span onClick={() => {
                textappear()
                // work()
            }
            }>{value}</span>
        </div>
    )
}

export default Cards
