import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <div>
       <Helmet>
                <title>Nature save worlds</title>
                <meta name="title" content="Nature save worlds" />
                <meta name="description"
                    content="Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jaykay-portfolio-v2.netlify.app/" />
                <meta property="og:title" content="Nature save worlds" />
                <meta property="og:description"
                    content="Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology." />
                <meta property="og:image" content="https://jaykay-portfolio-v2.netlify.app/img/cover-pic.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://jaykay-portfolio-v2.netlify.app/" />
                <meta property="twitter:title" content="Nature save worlds" />
                <meta property="twitter:description"
                    content="Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology." />
                <meta property="twitter:image" content="https://jaykay-portfolio-v2.netlify.app/img/cover-pic.jpg" />

            </Helmet>
        <h2>About Page</h2>
    </div>
  )
}
