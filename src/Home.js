import logo from './logo.svg'
import React, { useState } from 'react'
import { ReactDOM } from 'react'
import './Home.css'
import Login from './Login'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
      <header class='mdl-layout__header'>
        <div class='mdl-layout__header-row'>
          <span class='mdl-layout-title'>Freelance</span>
          <div class='mdl-layout-spacer'></div>

          <nav class='mdl-navigation'>
            <div class='searchField'>
              <input type='text' placeholder='search service'></input>
            </div>
            <div class='loginButton'>
              <Link to='/Login'>Sign in</Link>
            </div>
            <div class='signupButton'>
              <Link to='/Signup'>Sign up</Link>
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
            <a>Graphics and Design</a>
            <a>Digital Marketing</a>
            <a>Writing and Translation</a>
            <a>Video and Animation</a>
            <a>Music and Audio</a>
            <a>Programming and Tech</a>
            <a>Business</a>
            <a>Lifestyle</a>
            <a>Data</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
