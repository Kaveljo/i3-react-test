import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import About from './components/pages/About'

import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  const [cards, setCards]=useState([])

  useEffect(()=>{
    const getCards = async () => {
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer)
    }
    
    getCards()
  }, [])


  const fetchCards = async () => {
    const result = await fetch('http://localhost:5000/cards')
    const data = await result.json()
    
    return data
  }

  const [aboutCards, setAboutCards]=useState([])

  useEffect(()=>{
    const getAboutCards = async () => {
      const cardsFromServer = await fetchAboutCards()
      setAboutCards(cardsFromServer)
    }
    
    getAboutCards()
  }, [])


  const fetchAboutCards = async () => {
    const result = await fetch('http://localhost:5000/about')
    const data = await result.json()

    return data
  }


  return (
    <Router>
      <div className="app">
        <Header/>
        <Route path="/" exact render={(props) => (
          <>
            <Home cards={cards}/>
          </>
        )} />
        <Route path="/about" component={() => <About aboutCards={aboutCards} />} /> 
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
