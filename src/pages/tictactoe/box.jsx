import React from 'react'
import './box.css'

const Box = ({inText,onClick,disabled,number}) => {

  return (
    <div className='box' id={number} onClick={disabled ? null : onClick}>
      {inText}

    </div>
  )
}

export default Box
