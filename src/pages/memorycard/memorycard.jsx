import React from 'react'
import "./cards.css"
import Cards from './cards'
import { useEffect, useState } from 'react'
const Memorycard = () => {
  const [allWords, setAllWords] = useState([])
  const [words, setWords] = useState([])
  async function ranWord() {
    const data = await fetch("https://random-word-api.herokuapp.com/all");
    const jdata = await data.json()
    console.log(jdata)
    setAllWords(jdata)
  }
  useEffect(() => {
    ranWord()
  }, [])
  useEffect(() => {
    if (allWords.length > 0) {
    var l = [allWords[randint(0, allWords.length - 1)], allWords[randint(0, allWords.length - 1)], allWords[randint(0, allWords.length - 1)]]
    setWords(l)
    window.localStorage.setItem("words", JSON.stringify(l))
    
  }
  }, [allWords])
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(words.length>0){
    return (
    <div id="mc">
      <Cards text={words[0]} />
      <Cards text={words[1]} />
      <Cards text={words[2]} />
    </div>
  )
  }
  if(allWords.length==0){
    return <div id="loading" style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Loading...</div>
  }
  
}

export default Memorycard
