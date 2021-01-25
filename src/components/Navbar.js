import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { FaSlidersH } from 'react-icons/fa'
import Home from '../screens/Home'
import Score from'../screens/Score'
import Boss from '../screens/Boss'
import Profile from '../screens/Profile'
import TickOffMulti from '../screens/TickOffMulti'
import Login from '../components/Login'
import Preference from '../components/Preference'
import Dashboard from '../components/Dashboard'
import Dropdown from '../components/Dropdown'

const Navbar = () => {
    const [token, setToken] = useState()

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <Router>
            <div className="navBar">
                <nav>
                    <ul className="nav">
                        <li className="navHome">
                            <Link to exact path="/Home">Home(link not working lololol)</Link>
                        </li>
                        <li>
                            <Link to='/Score'>Score</Link>
                        </li>
                        <li>
                            <Link to='/Boss'>Boss</Link>
                        </li>
                        <li>
                            <Link to='/Profile'>Player Profile</Link>
                        </li>
                        <li>
                            <Link to='/Multi'>Multi tracker</Link>
                        </li>

                        <li>
                            <Dropdown />
                        </li>
                        <li>
                            <FaSlidersH size={22} color={'white'} />
                            
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Score' component={Score} />
                <Route path='/Boss' component={Boss} />
                <Route path='/Profile' component={Profile} />
                <Route path='/Multi' component={TickOffMulti} />
                <Route path='/Dashboard' component={Dashboard} />
                <Route path='/Preference' component={Preference} />
                <Route path='/Login' component={Login} />

            </Switch>
        </Router>
    )
}

export default Navbar
