import React from 'react'
import "./input.css"

const Input = ({ text }) => {
  const [value, setValue] = React.useState("")
  const [inpwords, setInpwords] = React.useState([])
  
  localStorage.setItem("inpwords", JSON.stringify(inpwords))
  
  return (
    <div>
      <input type="text" placeholder={text} id="word-input" onChange={
        (e) => {
          console.log(e.target.value)
          setValue(e.target.value)
          console.log(value)
          setInpwords([...inpwords, e.target.value])
        }
      } />
    </div>
  )
}

export default Input
