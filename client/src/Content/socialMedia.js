import React, {Fragment} from 'react';

const sort_by = (order, value) => {
  if (order === 'ASC') {
    return (a, b) => b[value] - a[value]
  } else if (order === 'DESC') {
    return (a, b) => a[value] - b[value]
  }
}

export const SocialMedia = ({data}) => {
  const {link} = data

  return (<Fragment>

  <div className="col order-md-last col-md-5" style={{margin:'1rem 0'}}>
  <div className="row">
  {link
  .field
.sort(sort_by('DESC', 'order'))
.map((link,n)=>
    <div className="col" key={n}>
    <a href={link.url} alt={link.name} target="_blank" rel="noopener noreferrer"><i className={link.icon} style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',
      }}></i></a>
    </div>
  )}
    </div>
    </div>

  </Fragment>
);

}
