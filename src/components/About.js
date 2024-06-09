import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <div>
      <Helmet>
      <title>About</title>
      <meta property='og:title' content='About Component'/>
      <meta property='og:description' content='About Component Description'/>
      <meta property='og:url' content={window.location.href}/>
      <meta property='og:image' content='https://deploytest-frontend.netlify.app//asset/about.jpg'/>
    </Helmet>
        <h2>About Page</h2>
    </div>
  )
}
