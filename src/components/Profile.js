import React, { useEffect } from 'react'

export default function Profile() {
    const setMetaTags = (tags) => {
        Object.keys(tags).forEach(key => {
          let metaTag = document.querySelector(`meta[property='${key}']`);
          if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('property', key);
            document.head.appendChild(metaTag);
          }
          metaTag.setAttribute('content', tags[key]);
        });
      };
    
      useEffect(() => {
        const metaTags = {
          'og:title': 'Nature save worlds',
          'og:description': 'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
          'og:image': 'https://jaykay-portfolio-v2.netlify.app/img/cover-pic.jpg',
          'og:url': `https://deploytest-frontend.netlify.app/login`,
          'og:type': 'website'
        };
    
        setMetaTags(metaTags);
      }, []);
    return (
        <>
            <div>Profile</div>
            <img src="/asset/profile-img.jpg" alt="profile" />
        </>
    )
}
