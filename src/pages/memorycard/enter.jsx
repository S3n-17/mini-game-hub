import React from 'react'
import "./enter.css"
const Enter = () => {
    const [btnText, setBtnText] = React.useState("Enter")
    const [flag, setFlag] = React.useState(0)
    function chk(words, inpwords) {
        setFlag(0)
        for (var i = 0; i < words.length; i++) {
            if (words[i] !== inpwords[i]) {
                return ("FAIL")
            }
        }
        return ("PASS")

    }
    return (
        <button id="enter" onClick={() => {
            const words = localStorage.getItem("words")
            const inpwords = localStorage.getItem("inpwords")
            const result = chk(words, inpwords)
            setBtnText(result)
        }
        }>{btnText}</button>
    )
}

export default Enter
