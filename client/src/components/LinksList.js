import React from 'react'
import {Link} from 'react-router-dom'

import rotateDeviceImg from '../images/rotate-device.png'

function LinksList({links}) {
  if (!links.length) {
    return <p className="center">No Links yet :P</p>
  }

  const truncateString = (str, n) => {
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };

  return (
    <>
      <table className="container responsive-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Original Link</th>
            <th>Shortened Link</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          {links.map((link, i) => {
            return (
              <tr key={link._id}>
                <td>{++i}</td>
                <td>{truncateString(link.from, 40)}</td>
                <td>{link.to}</td>
                <td>
                  <Link to={`/detail/${link._id}`}>Open</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="rotate-device">
        <img src={rotateDeviceImg} alt="rotate device" />
        <p className="#b388ff deep-purple-text text-accent-1">Please rotate your device</p>
      </div>
    </>
  )
}

export default LinksList
