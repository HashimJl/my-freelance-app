import React, { useState } from 'react'
import { ReactDOM } from 'react'
import App from './App'
import Home from './Home'
import './Login.css'
import SignedIn from './SignedIn'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const navigate = useNavigate()

  // SQL Data
  const [data, setData] = useState([])

  // userdetails which need to be compared
  const [newUser, setNewUser] = useState({ email: '', password: '' })

  const errors = {
    email: 'invalid email',
    pass: 'invalid password',
  }

  const handleSubmit = async e => {
    //prevent page reload
    e.preventDefault()

    try {
      const res = await axios.get("http://localhost:8800/userdetails")
      setData(res.data)
    } catch (err) {
      console.log(err)
    }

    // find user login info from all user entrys
    const userData = data.find((user) => user.email === newUser.email)

    // compare user info
    if (userData) {
      if (userData.password !== newUser.password) {
        // invalid password
        setErrorMessages({ name: 'pass', message: errors.pass })
      }
      else {
        navigate("/Signedin")
      }
    }
    else {
      // email not found
      setErrorMessages({ name: 'email', message: errors.email })
    }

    //VERY IMPORTANT -> GIVE 'userData' TO 'SignedIn' PAGE
  }

  // JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    )

  return (
    <div className='app'>
      <div className='login-form'>
        {/*<div className='form'>*/}
        <form>
          <div className='input-container'>
            <label>Email </label>
            <input
              type='text'
              name='uname'
              required
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              value={newUser.email}
            />

            {renderErrorMessage('uname')}
          </div>

          <div className='input-container'>
            <label>Password </label>
            <input
              type='password'
              name='pass'
              required
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              value={newUser.password}
            />
            {renderErrorMessage('pass')}
          </div>

          <div className='button-container'>
            <input type='submit' value='sign in'
              onClick={handleSubmit} />
          </div>
        </form>
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Login
