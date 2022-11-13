import React, { useState } from 'react'
import { ReactDOM } from 'react'
import App from './App'
import Home from './Home'
import './Login.css'
import SignedIn from './SignedIn'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // user login info (react list)
  const [data, setData] = useState([])

  const errors = {
    email: 'invalid email',
    pass: 'invalid password',
  }

  const [userdetails, setUserdetails] = useState({ email: '', password: '' })

  const handleSubmit = async e => {
    //prevent page reload
    e.preventDefault()
    try {
      const res = await axios.get("http://localhost:8800/userdetails")
      setData(res.data)
    } catch (err) {
      console.log(err)
    }



    // find user login info
    const userData = data.find((user) => user.email === userdetails.email)

    // compare user info
    if (userData) {
      if (userData.password !== userdetails.password) {
        // invalid password
        setErrorMessages({ name: 'pass', message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      // username not found
      setErrorMessages({ name: 'email', message: errors.email })
    }

  }

  // JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className='error'>{errorMessages.message}</div>
    )

  // JSX code for login form
  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Email </label>
          <input
            type='text'
            name='uname'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, email: e.target.value })
            }
            value={userdetails.email}
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
              setUserdetails({ ...userdetails, password: e.target.value })
            }
            value={userdetails.password}
          />
          {renderErrorMessage('pass')}
        </div>

        <div className='button-container'>
          <input type='submit' value='sign in' />
        </div>
      </form>
    </div>
  )

  return (
    <div className='app'>
      <div className='login-form'>
        {isSubmitted ? <Navigate to='/Signedin' /> : renderForm}
      </div>
    </div>
  )
}

export default Login
