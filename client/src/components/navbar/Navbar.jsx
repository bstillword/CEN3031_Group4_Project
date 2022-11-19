import React, { useState } from 'react';
import{RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () =>(
  <>
   <p><a href="#home"> Home</a></p>
          <p><a href="#whatmck4"> What is Meta Colorful Knowledge?</a></p>
          <p><a href="#possibility"> Likes</a></p>
          <p><a href="#features"> Followers </a></p>
          <p><a href="#blog"> Publishers</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mck4__navbar"> 
      <div className="mck4_navbar-links">
        <div className ="mck4__navbar-links_logo">
           {/*<img src={logo} alt = "logo" />*/}
        </div>
        <div className="mck4__navbar-links_container">
         <Menu />
        </div>
      </div>
      <div className = "mck4__navbar-sign">
        <button type="button"> Sign In</button>
      </div>
      <div className = "mck4__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu = false} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu = true} />
        }
        {toggleMenu &&(
          <div className = "mck4__navbar-menu_container scale-up-center">
            <div className = "mck4__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Navbar