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

function Home() {
    

    return (
        <>
            <Navbar />
            <div id="games">
                <Game link={tictactoe} />
                <Game link={memorygame} name='memorycard' component={Memorycard} />
                <Game link={rps} />
                <Game link={hc} />
            </div>
        </>
    )
}
function App() {
    return (
        <Routes>
            <Route path='/memorycard' element={<Memorycard />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default App
