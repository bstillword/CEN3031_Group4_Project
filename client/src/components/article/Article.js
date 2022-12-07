import React, {useState, useEffect} from 'react'
import {Navbar, Brand, CTA} from '..';
import {Footer, Blog, Possibility, Features, WhatMCK4, Header, ArticleBody} from '../../containers'
import SearchBar from '../../containers/search/Searchbar';
const Article = () => {
    var tet = "Computers"
    const [category, setCategory] = useState({category:tet, iter:0});
 
    useEffect(() => {
        console.log(category, '- Has changed');
        tet = category;
        console.log(tet)
    },[category])

    
    return (
        <div className='Parent'>
        <div className = "gradient__bg">
            <Navbar />
            <SearchBar placeHolder={"Computers"} stateChanger={setCategory}/>
            <ArticleBody placeHolder={category} />
        </div>
        <div>
        </div>
        </div>
    )
  }
  
  export default Article