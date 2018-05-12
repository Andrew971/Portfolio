import React from 'react';


export const SocialMedia = (className) => {

  return (    <div className="row align-items-center">
  <div className="col">

    <a href="https://www.linkedin.com/in/andrewsordier/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
    </div>

      <div className="col">

    <a href="https://github.com/Andrew971" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
  </div>
      <div className="col">

  <a href="https://www.youtube.com/channel/UCGFLYDt_1qyCxEF6MeRqGHA/" target="_blank" rel="noopener noreferrer">  <i className="fab fa-youtube" style={{
        fontSize: '1.5rem',
        margin: '0 1rem',
        color:'white'
      }}></i></a>
    </div>

  </div>);

}
