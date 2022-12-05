import {Navbar, Brand, CTA} from '..';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header, ArticleBody} from '../../containers'
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


const Article = () => {
    return (
        <div className='Parent'>
        <div className = "gradient__bg">
            <Navbar />
            <ArticleBody/>
        </div>
        <div>
        </div>
        </div>
    )
  }
  
  export default Article