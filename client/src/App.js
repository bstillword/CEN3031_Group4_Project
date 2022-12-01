//Code for Meta Colorful Knowledge Application
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar, Brand, CTA} from './components';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header} from './containers'
import './App.css'
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import UserDetails from './components/UserInfo';

const App = () => {
  return (
    <Router>
    <div className = "App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/sign-in" element={<Login/>} />
        <Route exact path="/sign-up" element={<Signup/>} />
        <Route exact path="/user" element={<UserDetails/>} />
      </Routes>
    </div>
    </Router>
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

