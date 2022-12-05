//import React, { useState } from 'react'
//import { ReactDOM } from 'react'
import './Home.css'
//import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { MdOutlineDesignServices, MdOutlineOndemandVideo } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { BsMusicNote, BsCodeSlash, BsPencil } from 'react-icons/bs'
import { FaBusinessTime, FaDatabase } from 'react-icons/fa'
import { GiLifeInTheBalance } from 'react-icons/gi'
import { GoSearch } from 'react-icons/go'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

  const userData = localStorage.getItem("user")
  const navigate = useNavigate()

  const [data, setData] = useState([])

  const linkStyle = {
    color: 'blue',
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/entry/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
    //userData = null;
    //sessionStorage.clear();
  };



  return (
    <IconContext.Provider value={{ color: "#3f51b5", size: "2em" }}>
      <div class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <header class='mdl-layout__header'>
          <div class='mdl-layout__header-row'>
            <span class='mdl-layout-title'>Freelance</span>
            <div class='mdl-layout-spacer'></div>

            <nav class='mdl-navigation'>
              <div class='searchField'>
                <GoSearch color='white' /> <input type='text' placeholder='search service'></input>
              </div>
              <div class='loginButton'>
                <label>logged in as: {userData}</label>
              </div>
              <div class='signupButton' onClick={handleLogout}>
                <Link to='/'>Log out</Link>
              </div>
            </nav>
          </div>
        </header>
        <div class='mdl-layout__drawer'>
          <span class='mdl-layout-title'>Title</span>
          <nav class='mdl-navigation'>
            <a class='mdl-navigation__link' href=''>
              Link
            </a>
            <a class='mdl-navigation__link' href=''>
              Link
            </a>
            <a class='mdl-navigation__link' href=''>
              Link
            </a>
            <a class='mdl-navigation__link' href=''>
              Link
            </a>
          </nav>
        </div>
        <main class='mdl-layout__content'>
          <br></br>
          <br></br>
          <div class='mainArea'>
            <h3>Explore the marketplace</h3>
            <div class='mainGrid'>
              <a><MdOutlineDesignServices /> <Link to='../Graphics' style={linkStyle}>Graphics and Design</Link> </a>
              <a><FiShoppingCart /> <Link to='../DigMarketing' style={linkStyle}>Digital Marketing</Link></a>
              <a><BsPencil /> <Link to='../Writing' style={linkStyle}>Writing and Translation</Link></a>
              <a><MdOutlineOndemandVideo /> <Link to='../VideoAnimation' style={linkStyle}>Video and Animation</Link></a>
              <a><BsMusicNote /> <Link to='../Audio' style={linkStyle}>Music and Audio</Link></a>
              <a><BsCodeSlash /> <Link to='../Programming' style={linkStyle}>Programming and Tech</Link></a>
              <a><FaBusinessTime /> <Link to='../Business' style={linkStyle}>Business</Link></a>
              <a><GiLifeInTheBalance /> <Link to='../Lifestyle' style={linkStyle}>Lifestyle</Link></a>
              <a><FaDatabase /> <Link to='../Data' style={linkStyle}>Data</Link></a>
            </div>
          </div>
        </main>
      </div>
    </IconContext.Provider>

  )
}

export default Home
