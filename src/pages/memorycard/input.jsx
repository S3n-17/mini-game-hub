import React from 'react'
import "./input.css"

const Input = ({ text , id}) => {
  const [value, setValue] = React.useState("")
  const [inpwords, setInpwords] = React.useState([])
  
  return (
    <div>
      <input type="text" placeholder={text} id={id} className="word-input" onChange={
        (e) => {
          console.log(e.target.value)
          setValue(e.target.value)
          console.log(value)
          localStorage.setItem(id, e.target.value)
        }
      } />
    </div>
  )
}

export default Input
