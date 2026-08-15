import React from 'react'
import "./enter.css"
const Enter = () => {
    const [btnText, setBtnText] = React.useState("Enter")
    const [btnDisabled, setBtnDisabled] = React.useState(true)
    const [btnColor, setBtnColor] = React.useState("rgb(30, 30, 30)")
    const [btnBgColor, setBtnBgColor] = React.useState("#dfdfdf")
    const [flag, setFlag] = React.useState(0)
    function chk(words, inpwords) {
        setFlag(0)
        for (var i = 0; i < inpwords.length; i++) {
            if (words.includes(inpwords[i]) === false) {
                setBtnColor("white")
                setBtnBgColor("red")
                return ("FAIL")
            }
        }
        setBtnColor("white")
        setBtnBgColor("green")
        return ("PASS")

    }
    return (
        <button id="enter" style={{ backgroundColor: btnBgColor, color: btnColor }} onClick={() => {
            const words = JSON.parse(localStorage.getItem("words"))
            const inpwords = [
                localStorage.getItem("inp1"),
                localStorage.getItem("inp2"),
                localStorage.getItem("inp3")
            ]
            console.log(words, inpwords)
            if (words.length === 3 && inpwords.length === 3) {
                setBtnDisabled(false)
            }
            const result = chk(words, inpwords)
            setBtnText(result)
            if (btnText === "PASS" || btnText === "FAIL") {
                setBtnDisabled(true)
            }
            // if(btnText==="PASS"){
            //     setBtnColor("white")
            //     setBtnBgColor("green")
            // }
            // if(btnText==="FAIL"){
            //     setBtnColor("white")
            //     setBtnBgColor("red")
            // }
        }
        }>{btnText}</button>
    )
}

export default Enter
