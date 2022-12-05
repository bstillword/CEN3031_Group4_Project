import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar, Brand, CTA} from './components';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header} from './containers'
import './App.css'
import Article from './components/article/Article'
import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import UserDetails from './components/UserInfo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  
  return (
    <Router>
    <div className = "App">
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/articles" element={<Article/>}/>
        <Route exact path="/sign-in" element={<Login/>} />
        <Route exact path="/sign-up" element={<Signup/>} />
        <Route exact path="/user" element={<UserDetails/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App