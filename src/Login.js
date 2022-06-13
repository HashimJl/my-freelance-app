import React, { useState } from 'react'
import { ReactDOM } from 'react'
import App from './App'
import Home from './Home'
import './Login.css'

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // user login info (react list)
  const data = [
    {
      username: 'user1',
      password: 'pass1',
    },
    {
      username: 'user2',
      password: 'pass2',
    },
  ]

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  }

  const [userdetails, setUserdetails] = useState({ uname: '', pass: '' })

  const handleSubmit = (event) => {
    //prevent page reload
    event.preventDefault()

    // find user login info
    const userData = data.find((user) => user.username === userdetails.uname)

    // compare user info
    if (userData) {
      if (userData.password !== userdetails.pass) {
        // invalid password
        setErrorMessages({ name: 'pass', message: errors.pass })
      } else {
        setIsSubmitted(true)
      }
    } else {
      // username not found
      setErrorMessages({ name: 'uname', message: errors.uname })
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
          <label>Username </label>
          <input
            type='text'
            name='uname'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, uname: e.target.value })
            }
            value={userdetails.uname}
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
              setUserdetails({ ...userdetails, pass: e.target.value })
            }
            value={userdetails.pass}
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
      <div className='login-form'>{isSubmitted ? <Home /> : renderForm}</div>
    </div>
  )
}

export default Login
