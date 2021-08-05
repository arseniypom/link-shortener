import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

function CreatePage() {
  const history = useHistory()
  const auth = React.useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = React.useState('')

  React.useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const createHandler = async (e) => {
    if (e.key === 'Enter' || e.target.name === 'action') {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link, date: Date.now()}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (error) {}
    }
  }
  return (
    <div className="row section">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input
            placeholder="Paste here your link"
            id="link"
            type="text"
            className="validate"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={createHandler}
          />
          <label htmlFor="email">Create Link</label>
        </div>
        <button onClick={createHandler} className="btn waves-effect waves-light deep-purple accent-1" type="submit" name="action">Create
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  )
}

export default CreatePage
