import logo from './logo.svg';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './App.css';

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // user login info (react list)
  const data = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const [userdetails,setUserdetails] = useState({uname: "", pass: ""});

  const handleSubmit = (event) => {
    //prevent page reload
    event.preventDefault();

    // find user login info
    const userData = data.find((user) =>
      user.username === userdetails.uname
    );

    // compare user info
    if (userData) {
      if (userData.password !== userdetails.pass) {
        // invalid password
        setErrorMessages({ name: "pass", message: errors.pass});
      } 
      else {
        setIsSubmitted(true);
      }
    }
    else {
      // username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };


  // JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // JSX code for login form
  const renderForm = (
    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required 
          onChange={e => setUserdetails({...userdetails, uname: e.target.value})}
          value={userdetails.uname}/>

          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required 
          onChange={e => setUserdetails({...userdetails, pass: e.target.value})}
          value={userdetails.pass}/>
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <input type="submit" value="sign in"/>
        </div>
      </form>

    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">
          Sign In
        </div>
        {isSubmitted ? <div>User is succesfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;

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