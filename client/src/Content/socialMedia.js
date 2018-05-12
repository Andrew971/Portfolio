import React, {Fragment} from 'react';


export const SocialMedia = (className) => {

  return (<Fragment>

  <div className="col order-md-last col-md-3" style={{margin:'1rem 0'}}>
  <div className="row">
  <div className="col">

    <a href="https://www.linkedin.com/in/andrewsordier/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',

      }}></i></a>
    </div>

      <div className="col">

    <a href="https://github.com/Andrew971" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',
      }}></i></a>
  </div>
      <div className="col">

  <a href="skype:littledavis971?call" target="_blank" rel="noopener noreferrer">  <i className="fab fa-skype" style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',

      }}></i></a>
    </div>
    </div>
    </div>

  </Fragment>
);

}
