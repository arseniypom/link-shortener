import React from 'react'
import { useHttp } from '../hooks/http.hook'


function AuthPage() {
  const {isLoading, request, error} = useHttp()
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  })

  const inputHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('DATA', data);
    } catch (error) {
      
    }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
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
            className="btn purple accent-3"
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
