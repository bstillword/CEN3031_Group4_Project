import React from 'react';
import './header.css';
import peeps from '../../assets/peeps.png';
import mck_logo from '../../assets/mck_logo.PNG';
const Header = () => {
  return (
    <div className='mck4__header section__padding' id="home">
      <div className='mck4__header-content'>
        <h1 className='header__text'>Are you ready to learn Colorfully?</h1>
        <p>Meta Colorful Knowledge will allow you to learn snippets of information at your own pace on your own time. Feel free to join today!</p>
        <div className='mck4__header-cont__input'>
          <input type="email" placeholder='Input your email here'/>
          <button type="button">Get Colorful</button>
        </div>
        <div className='mck4__header-cont__peeps'>
          <img src={peeps} alt="people" />
          <p>You're the 1,637th peep to request access today</p>
        </div>
        
      </div>
      <div className='mck4__header-img'>
          <img src={mck_logo} alt="logo" />
        </div>
      </div>
  )
}

export default Header