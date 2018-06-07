import React, {Fragment} from 'react';
import Layout from '../Components/Grid/Layout'

const sort_by = (order, value) => {
  if (order === 'ASC') {
    return (a, b) => b[value] - a[value]
  } else if (order === 'DESC') {
    return (a, b) => a[value] - b[value]
  }
}

export const SocialMedia = ({data}) => {
  const {link} = data

  return (<Layout items xs md lg xl display="inline-flex" direction="row" justify="space-around" width="20rem">
  {link
  .field
.sort(sort_by('DESC', 'order'))
.map((link,n)=>
     <Fragment key={n}>
    <a href={link.url} alt={link.name} target="_blank" rel="noopener noreferrer"><i className={link.icon} style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',
      }}></i></a>
    </Fragment>
  )}
  </Layout>
);

}
