import React, {Fragment} from 'react';
import Layout from '../Components/Grid/Layout'
import {sort_by} from '../Utils/constants/constMethod'


export const SocialMedia = ({data}) => {
  return (<Layout items xs md lg xl display="inline-flex" direction="row" justify="space-around" width="15rem" padding="0">
  {data
  .field
.sort(sort_by('DESC', 'order'))
.map((link,n)=>
     <Fragment key={n}>
    <a href={link.url} alt={link.name} target="_blank" rel="noopener noreferrer"><i className={link.icon} style={{
        fontSize: '1.5rem',
        color:'white',
        margin:'auto',
      }} alt={link.name}></i></a>
    </Fragment>
  )}
  </Layout>
);

}
