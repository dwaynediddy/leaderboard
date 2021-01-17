import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from '../screens/Home'
import Score from'../screens/Score'
import Boss from '../screens/Boss'
import Profile from '../screens/Profile'
import TickOffMulti from '../screens/TickOffMulti'

const Navbar = () => {
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
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Score' component={Score} />
                <Route path='/Boss' component={Boss} />
                <Route path='/Profile' component={Profile} />
                <Route path='/Multi' component={TickOffMulti} />

            </Switch>
        </Router>
    )
}

export default Navbar
