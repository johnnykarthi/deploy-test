import React from 'react'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta property='og:title' content='Home Component'/>
      <meta property='og:description' content='Home Component Description'/>
      <meta property='og:url' content={window.location.href}/>
      <meta property='og:image' content='/asset/home.jpg'/>
    </Helmet>
        <h2>Home Page</h2>
    </>
  )
}
