import React, { useState } from 'react'
import Home from './Home'
import './Signup.css'

function Signup() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {}

  const renderForm = (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>First Name</label>
          <input type='text' name='fname' required />
        </div>
        <div className='input-container'>
          <label>Last Name</label>
          <input type='text' name='lname' required />
        </div>
        <div className='input-container'>
          <label>Email</label>
          <input type='text' name='email' required />
        </div>
        <div className='input-container'>
          <label>Password</label>
          <input type='password' name='password' required />
        </div>

        <div className='button-container'>
          <input type='submit' value='sign up' />
        </div>
      </form>
    </div>
  )

  return (
    <div className='app'>
      <div className='signup-form'>{isSubmitted ? <Home /> : renderForm}</div>
    </div>
  )
}
export default Signup
