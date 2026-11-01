import React from 'react'
import './rsp.css'
import Namecard from './namecard'

const Rsp = () => {
    const [namey, setNamey] = React.useState('')
    const [namec, setNamec] = React.useState('')

    const choices = ['rock', 'paper', 'scissors']
    const playGame = (choice) => {
        setNamey(choice)

        const random = Math.floor(Math.random() * 3)
        setNamec(choices[random])
    }
    const res = (namey, namec) => {
        if (namey === namec) {
            return 'Draw'
        } else if ((namey === 'rock' && namec === 'scissors') || (namey === 'paper' && namec === 'rock') || (namey === 'scissors' && namec === 'paper')) {
            return 'You Win!'
        } else {
            return 'Computer Wins!'
        }
    }

    return (
        <>
            {/* <h2 id="heading">ROCK PAPER SCISSORS</h2> */}

            <div className='rsp'>
                <Namecard Player='You' text={namey} />
                <Namecard Player='Computer' text={namec} />
            </div>

            <h3>Choose your weapon</h3>

            <div className='rsp-btns'>
                <button onClick={() => playGame('rock')}>Rock</button>
                <button onClick={() => playGame('paper')}>Paper</button>
                <button onClick={() => playGame('scissors')}>Scissors</button>
            </div>
            <div id='result'>
                {res(namey, namec)}
            </div>
        </>
    )
}

export default Rsp
