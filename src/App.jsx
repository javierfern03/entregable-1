import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import { useState } from 'react'
import color from './json/color.json'

function App() {

  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setquoteRandom] = useState(getRandomFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(useState(getRandomFromArray(color)))

  const handleclick = () => {
    setquoteRandom(getRandomFromArray(quotes))
    setcolorRandom(getRandomFromArray(color))
  }
  const objStyle = {
    backgroundColor: colorRandom
  }


  return (
    <div className="App" style={objStyle}>
      <QuoteBox quoteRandom={quoteRandom} handleclick={handleclick} colorRandom={colorRandom} />
    </div>
  )
}
export default App