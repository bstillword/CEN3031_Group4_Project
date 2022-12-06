import React, { Component } from 'react';
import {Navbar, Brand, CTA} from '../components';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header} from '../containers'

import SignUpForm from './SignupForm';

import './LoginPage.css';

const SignUp = () => {
    return (
        <div>
        <div className='navBar'> <Navbar/> </div>
        <div className='SignUpPage'>
            <div className='Form'>
            <SignUpForm />
            </div>
        </div>
        </div>
    )
  }
  
  export default SignUp