import React from 'react'
import "./cards.css"
import Cards from './cards'
import { useEffect, useState } from 'react'
const Memorycard = () => {
  const [words, setWords] = useState([])
  async function ranWord() {
    const data = await fetch("https://random-word-api.herokuapp.com/word");
    const jdata = await data.json()
    console.log(jdata)
    return (jdata)
  }
  useEffect(() => {
    ranWord()
  }, [])
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var l = [ranWord().then((words) => words[randint(0, words.length)]), ranWord().then((words) => words[randint(0, words.length)]), ranWord().then((words) => words[randint(0, words.length)])]
  window.localStorage.setItem("words",l)
  return (
    <div id="mc">
      <Cards text={l[0]} />
      <Cards text={l[1]} />
      <Cards text={l[2]} />
    </div>
  )
}

export default Memorycard
