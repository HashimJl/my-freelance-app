import logo from './logo.svg'
import React, { useState } from 'react'
import { ReactDOM } from 'react'
import './App.css'
import Login from './Login'

function App() {
  return (
    <div class='demo-layout-waterfall mdl-layout mdl-js-layout'>
      <header class='mdl-layout__header mdl-layout__header--waterfall'>
        {/*<!-- Top row, always visible -->*/}
        <div class='mdl-layout__header-row'>
          {/*<!-- Title -->*/}
          <span class='mdl-layout-title'>The Freelancers</span>
          <div class='mdl-layout-spacer'></div>
          <div
            class='mdl-textfield mdl-js-textfield mdl-textfield--expandable
                  mdl-textfield--floating-label mdl-textfield--align-right'
          >
            <label
              class='mdl-button mdl-js-button mdl-button--icon'
              for='waterfall-exp'
            >
              <i class='material-icons'>search</i>
            </label>

            <div class='mdl-textfield__expandable-holder'>
              <input
                type='text'
                class='mdl-textfield__input'
                name='sample'
                id='waterfall-exp'
              />
            </div>
          </div>
        </div>
        {/*<!-- Bottom row, not visible on scroll -->*/}
        <div class='mdl-layout__header-row'>
          <div class='mdl-layout-spacer'></div>
          {/*<!-- Navigation -->*/}
          <nav class='mdl-navigation'>
            <a class='mdl-navigation__link' href={<Login />}>
              Sign In
            </a>
            <a class='mdl-navigation__link'>
              Sign Up
            </a>
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
        <div class='page-content'>{/*<!-- Your content goes here -->*/}</div>
      </main>
    </div>
  )
}

export default App

/*
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
