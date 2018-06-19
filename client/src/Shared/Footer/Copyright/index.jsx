import React from 'react'
import {SectionCard} from '../../../Components/Cards'
import {Layout} from '../../../Components/Grid/'
import {SocialMedia} from '../../socialMedia'

export default ({data}) => {
  return (
    <SectionCard primary alignItems="flex-start" style={{padding:'2rem 2rem'}}>
            <Layout container md lg xl direction="row-reverse" justify="space-between" alignItems="center">
              <SocialMedia data={data}/>
              <Layout item width="40%">
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
                </Layout>
            </Layout>
          </SectionCard>
  )
}
