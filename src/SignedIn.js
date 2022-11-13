import './SignedIn.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import { IconContext } from 'react-icons'
import { MdOutlineDesignServices, MdOutlineOndemandVideo } from 'react-icons/md'
import { FiShoppingCart } from 'react-icons/fi'
import { BsMusicNote, BsCodeSlash, BsPencil } from 'react-icons/bs'
import { FaBusinessTime, FaDatabase } from 'react-icons/fa'
import { GiLifeInTheBalance } from 'react-icons/gi'
import { GoSearch } from 'react-icons/go'
import { useEffect, useState } from 'react'
import axios from 'axios'

function SignedIn() {

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchuserdetails = async () => {
      try {
        const res = await axios.get("http://localhost:8800/userdetails")
        setData(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchuserdetails()
  }, [])


  return (
    <IconContext.Provider value={{ color: "#3f51b5", size: "2em" }}>
      <div class='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
        <header class='mdl-layout__header'>
          <div class='mdl-layout__header-row'>
            <span class='mdl-layout-title'>Freelance</span>
            <div class='mdl-layout-spacer'></div>

            <nav class='mdl-navigation'>
              <div class='searchField'>
                <GoSearch color='white' /> <input type='text' placeholder='search service'></input>
              </div>
              <div class='loginButton'>
                <label>logged in as: {data.firstName} , {data.lastName} </label>
              </div>
              <div class='signupButton'>
                <Link to='/'>Log out</Link>
              </div>
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
          <br></br>
          <br></br>
          <div class='mainArea'>
            <h3>Explore the marketplace</h3>
            <div class='mainGrid'>
              <a><MdOutlineDesignServices /> Graphics and Design</a>
              <a><FiShoppingCart /> Digital Marketing</a>
              <a><BsPencil /> Writing and Translation</a>
              <a><MdOutlineOndemandVideo /> Video and Animation</a>
              <a><BsMusicNote /> Music and Audio</a>
              <a><BsCodeSlash /> Programming and Tech</a>
              <a><FaBusinessTime /> Business</a>
              <a><GiLifeInTheBalance /> Lifestyle</a>
              <a><FaDatabase /> Data</a>
            </div>
          </div>
        </main>
      </div>
    </IconContext.Provider>
  )
}

export default SignedIn
