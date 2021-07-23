import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import 'materialize-css'

function App() {
  const {token, login, logout, userId, isReady} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!isReady) {
    return <Loader />
  }
  
  return(
    <AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>
    <Router>
      {isAuthenticated && <Navbar />}
      <div className="container">
        {routes}
      </div>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
