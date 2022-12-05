import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import SignedIn from './SignedIn'
import Add from './AddData'
import Graphics from './categoryPages/Graphics'
import DigMarketing from './categoryPages/DigMarketing'
import Writing from './categoryPages/Writing'
import VideoAnimation from './categoryPages/VideoAnimation'
import Audio from './categoryPages/Audio'
import Programming from './categoryPages/Programming'
import Business from './categoryPages/Business'
import Lifestyle from './categoryPages/Lifestyle'
import Data from './categoryPages/Data'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signedin' element={<SignedIn />} />
        <Route path='/Add' element={<Add />} />
        <Route path='/Graphics' element={<Graphics />} />
        <Route path='/DigMarketing' element={<DigMarketing />} />
        <Route path='/Writing' element={<Writing />} />
        <Route path='/VideoAnimation' element={<VideoAnimation />} />
        <Route path='/Audio' element={<Audio />} />
        <Route path='/Programming' element={<Programming />} />
        <Route path='/Business' element={<Business />} />
        <Route path='/Lifestyle' element={<Lifestyle />} />
        <Route path='/Data' element={<Data />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
