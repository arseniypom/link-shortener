import React from 'react'

function AuthPage() {
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



  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1 className="header">LINKER</h1>
        <div className="card grey lighten-3">
        <div className="card-content white-text">
          <span className="card-title black-text">Authorization</span>
          <div>
            <div className="input-field">
              <input value={form.email} onChange={inputHandler} name="email" id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input value={form.password} onChange={inputHandler} name="password" id="password" type="password" class="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <div className="card-action">
          <button className="btn purple accent-3">Sign In</button>
          <button className="btn grey lighten-1 black-text">Register</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AuthPage
