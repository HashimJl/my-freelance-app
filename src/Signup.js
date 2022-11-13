import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const [userdetails, setUserdetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/userdetails", userdetails)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
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

  return (
    <div className='app' >
      <div className='signup-form'>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              required
              onChange={(e) =>
                setUserdetails({ ...userdetails, firstName: e.target.value })
              }
            />
          </div>
          <div className='input-container'>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              required
              onChange={(e) =>
                setUserdetails({ ...userdetails, lastName: e.target.value })
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
                setUserdetails({ ...userdetails, password: e.target.value })
              }
            />
          </div>

          <div className='button-container'>
            <input type='submit' value='sign up' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup
