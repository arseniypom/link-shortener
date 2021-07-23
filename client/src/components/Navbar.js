import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const auth = React.useContext(AuthContext)
  const history = useHistory()
  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
    <nav className="deep-purple accent-1">
      <div className="container nav-wrapper">
        <span className="brand-logo">L––R</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">Links</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Log Out</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
