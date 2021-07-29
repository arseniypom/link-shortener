import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'


function AuthPage() {
  const auth = React.useContext(AuthContext)
  const message = useMessage()
  const {isLoading, request, error, clearError} = useHttp()
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })

  React.useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  React.useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const inputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      if (data.token) {
        auth.login(data.token, data.userId)
      }
      message(data.message)
    } catch (error) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
      message(data.message)
    } catch (error) {}
  }

  return (
    <div className="row">
      <div className="col s12 m6 l4 offset-m3 offset-l4">
        <h1 className="header">LINKER</h1>
        <div className="card grey lighten-3">
          <div className="card-content white-text">
            <span className="card-title black-text">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="validate"
                  value={form.email}
                  onChange={inputHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="validate"
                  value={form.password}
                  onChange={inputHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn deep-purple accent-1"
              onClick={loginHandler}
              disabled={isLoading}
            >
              Sign In
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={isLoading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
