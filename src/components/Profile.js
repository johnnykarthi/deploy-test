import React from 'react'
import {Helmet} from 'react-helmet'

export default function Profile() {
  return (
    <>
    <Helmet>
      <title>Profile</title>
      <meta property='og:title' content='Profile Component'/>
      <meta property='og:description' content='Profile Component Description'/>
      <meta property='og:url' content={window.location.href}/>
      <meta property='og:image' content='https://deploytest-frontend.netlify.app//asset/profile.png'/>
    </Helmet>
    <div>Profile</div>
    <img src="/asset/profile-img.jpg" alt="profile" />
    </>
  )
}
