
import React from 'react'
import '../styles/gamecard.css'
import { Link } from 'react-router-dom'

const Game = ({ link, name, component: Component }) => {
  return (
    <div className='game-card'>
      <div className="pic">
        <img src={link} alt={name} />
        <Link to={`/${name}`} id="play-button">
          Play
        </Link>
      </div>
    </div>
  )
}

export default Game
