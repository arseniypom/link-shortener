import React from 'react'
import {Link} from 'react-router-dom'

function LinksList({links}) {
  if (!links.length) {
    return <p className="center">No Links yet :P</p>
  }

  return (
    <table>
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
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default LinksList
