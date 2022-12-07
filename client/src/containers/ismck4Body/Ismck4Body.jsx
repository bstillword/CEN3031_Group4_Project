import React from 'react';
import './Ismck4Body.css'
import blog02 from '../../assets/blog02.png';

const Ismck4Body = () => {

    return (
        
      <div className='mck4__header section__padding' id="home">
      <div className='mck4__header-content'>
        <h1 className='header__text'>MCK</h1>
        <p>Meta Colorful Knowledge is a web-app software product that tries to migrate
consumers from other social media platforms to an app that provides them information on
how to become tremendously useful to their families, local communities, and the greater
world through a focus on uplifting users rather than instilling despair!</p>
           
</div>
      <div className='mck4__header-img'>
          <img src={blog02} alt="logo" />
        </div>
      </div>
            
      )
}

export default Ismck4Body