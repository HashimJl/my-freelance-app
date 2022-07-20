import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import './Signup.css'

function Signup() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [userdetails, setUserdetails] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
  })

  const handleSubmit = (event) => {
    setIsSubmitted(true)
  }

  const userInfo = (
    <div>
      <label>succesfully signed up!</label>
      <form>
        <div className='button-container'>
          <Link to='/'>Back to Homepage</Link>
        </div>
      </form>
    </div>
  )

  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>First Name</label>
          <input
            type='text'
            name='fname'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, fname: e.target.value })
            }
          />
        </div>
        <div className='input-container'>
          <label>Last Name</label>
          <input
            type='text'
            name='lname'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, lname: e.target.value })
            }
          />
        </div>
        <div className='input-container'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, email: e.target.value })
            }
          />
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            required
            onChange={(e) =>
              setUserdetails({ ...userdetails, pass: e.target.value })
            }
          />
        </div>

        <div className='button-container'>
          <input type='submit' value='sign up' />
        </div>
      </form>
    </div>
  )

  return (
    <div className='app'>
      <div className='signup-form'>{isSubmitted ? userInfo : renderForm}</div>
    </div>
  )
}
export default Signup
