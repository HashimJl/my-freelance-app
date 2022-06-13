import logo from './logo.svg'
import React, { useState } from 'react'
import { ReactDOM } from 'react'
import './App.css'
import Login from './Login'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Mainpage</h1>
      <nav>
        <Link to='/Home'>Homepage</Link> <br></br>
        <Link to='/Login'>Loginpage</Link>
      </nav>
    </div>
  )
}

export default App
