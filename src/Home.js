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
            <div>
              <Link to='/Login'>Sign in</Link>
            </div>
            <div>
              <a class='mdl-navigation__link' href=''>
                Sign up
              </a>
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
        <div class='mainArea'>service categories here</div>
      </main>
    </div>
  )
}

export default Home
