import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="container landing">
      <h1 className="header">LINKER</h1>
      <div className="decorative decorative-1 deep-purple accent-1">
        <p>Easily get clicks' statistics of any link !</p>
        <p><strong>LINKER</strong> will help you to generate a unique link from yours in <span className="underlined">one</span> step to track its clicks</p>
      </div>
      <div className="decorative decorative-2 grey lighten-3">
        <p className="deep-purple-text text-accent-1">Ready to start off ??</p>
        <p className="deep-purple-text text-accent-1">Click the link below to register or login !</p>
        <strong>
          <Link to="/auth" className="deep-purple-text text-darken-4">Get started</Link>
        </strong>
      </div>
    </div>
  )
}

export default LandingPage
