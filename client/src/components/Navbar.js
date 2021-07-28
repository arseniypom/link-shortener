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

  React.useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = window.M.Sidenav.init(elems);
  }, [])

  const sidenavClickHandle = () => {
    const elem = document.querySelector('.sidenav');
    const instance = window.M.Sidenav.getInstance(elem);
    instance.close();
  }

  return (
    <>
      <nav className="deep-purple accent-1">
        <div className="nav-wrapper">
          <span className="brand-logo">L––R</span>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/create">Create</NavLink></li>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Log Out</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li onClick={sidenavClickHandle}><NavLink to="/create">Create</NavLink></li>
        <li onClick={sidenavClickHandle}><NavLink to="/links">Links</NavLink></li>
        <li onClick={sidenavClickHandle}><a href="/" onClick={logoutHandler}>Log Out</a></li>
      </ul>
    </>

  )
}

export default Navbar
