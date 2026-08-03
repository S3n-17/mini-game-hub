import React from 'react'
import "./input.css"

const Input = ({ text }) => {
  return (
    <div>
      <input type="text" placeholder={text} id="word-input"/>
    </div>
  )
}

export default Input
