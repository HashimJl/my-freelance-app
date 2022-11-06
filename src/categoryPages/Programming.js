import { useEffect, useState } from 'react'
import axios from 'axios'
import './categories.css'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { GoSearch } from 'react-icons/go'

function Programming() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/Programming")
                setData(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
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
                                <Link to='/Login'>Sign in</Link>
                            </div>
                            <div class='signupButton'>
                                <Link to='/Signup'>Sign up</Link>
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
                        <h3>Programming and Tech</h3>
                        <div className="entrys">
                            {
                                data.map(data => (
                                    <div key={data.id} className="entry">
                                        <p>{data.username}</p>
                                        <p>{data.skill}</p>
                                        <p>{data.category}</p>
                                        <p>{data.description}</p>
                                        <p>{data.price}$</p>
                                        <p>{data.rating}</p>
                                        {/*<button className="delete" onClick={() => handleDelete(data.id)}>Delete</button> */}
                                        {/*<button className="update"> Update </button>*/}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </main>
            </div>
        </IconContext.Provider>

    )
}

export default Programming