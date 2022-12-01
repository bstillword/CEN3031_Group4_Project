import React, { Component } from 'react';
import {Navbar, Brand, CTA} from '../components';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header} from '../containers'

import LoginForm from './LoginForm';

import './LoginPage.css';

const Login = () => {
    return (
        <div>
        <Navbar/>
        <div className='LoginPage'>
            <div className='Form'>
            <LoginForm />
            </div>
        </div>
        </div>
    )
  }
  
  export default Login

  