import React from 'react'

function Loader() {
  return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
      <div className="preloader-wrapper active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader
