import React from 'react'
import '../styles/gamecard.css'
import {Route, Routes} from 'react-router-dom'
import Memorycard from '../pages/memorycard/memorycard'
import { Link } from 'react-router-dom'
const Game = ({link,name, component:Component}) => {
  return (
    <>
    <div className="pic">
      <img src={link}></img>
      <button id="play-button"><Link to={`/${name}`}>Play</Link></button>
    </div>
    </>
  )
}

export default Game
