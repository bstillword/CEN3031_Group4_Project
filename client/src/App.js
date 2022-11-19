//Code for Meta Colorful Knowledge Application
import React from 'react'

import {Navbar, Brand, CTA} from './components';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header} from './containers'
import './App.css'

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatMCK4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

//Initial Tutorial Code Below:
/*
import React, { useEffect, useState } from 'react'

function App() {

  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p> Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user} </p>

        ))
      )}
      <p> Group 4 Project Software Engineering</p>
      <p> Test Message</p>
    </div>
  )

}

export default App
*/


//Code for Our FrontEnd Below:

