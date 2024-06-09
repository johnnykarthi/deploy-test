import React from 'react'
import { Helmet } from 'react-helmet'

export default function Login() {
  return (
    <div>
      <Helmet>
      <title>Login</title>
      <meta property='og:title' content='Login Component'/>
      <meta property='og:description' content='Login Component Description'/>
      <meta property='og:url' content={window.location.href}/>
      <meta property='og:image' content='https://deploytest-frontend.netlify.app//asset/login.jpg'/>
    </Helmet>
        <h2>Login Page</h2>
    </div>
  )
}
