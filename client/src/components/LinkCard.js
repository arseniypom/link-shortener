import React from 'react'

function LinkCard({link}) {
  return (
    <div className="container link-card">
      <h1 className="header">LINK</h1>
      <div className="link-card__text">
        <p>Shortened link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
        <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        <p>Number of clicks: <strong>{link.clicks}</strong></p>
        <p>Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
      </div>
    </div>
  )
}

export default LinkCard
