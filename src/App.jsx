import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Game from './components/gamecard'
import Navbar from './components/navbar'
import tictactoe from "./assets/tictactoe.jpg";
import memorygame from "./assets/memorygame.jpg";
import rps from "./assets/rps.jpg";
import hc from "./assets/hc.png";
import { Route, Routes } from 'react-router-dom'
import Memorycard from './pages/memorycard/memorycard'
import Tictactoe from './pages/tictactoe/tictactoe'
import Rps from './pages/rps/rsp'

function Home() {
    

    return (
        <>
            <Navbar />
            <div id="games">
                <Game link={tictactoe} name='tictactoe' component={Tictactoe} />
                <Game link={memorygame} name='memorycard' component={Memorycard} />
                <Game link={rps} name='rps' component={Rps} />
                <Game link={hc}  />
            </div>
        </>
    )
}
function App() {
    return (
        <Routes>
            <Route path='/memorycard' element={<Memorycard />} />
            <Route path='/tictactoe' element={<Tictactoe />} />
            <Route path='/rps' element={<Rps />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default App
