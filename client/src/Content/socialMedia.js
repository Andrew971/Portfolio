import React from 'react';


export const SocialMedia = (className) => {

  return (<div className={className}>
    <a href="https://www.facebook.com/pandahug.ca/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
    <a href="https://www.instagram.com/pandahug.ca/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
  <a href="https://www.youtube.com/channel/UCGFLYDt_1qyCxEF6MeRqGHA/" target="_blank" rel="noopener noreferrer">  <i className="fab fa-youtube" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
  </div>);

}
