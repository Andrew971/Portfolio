import React from 'react'
import Footer from '../../../Components/Footer'
import Layout from '../../../Components/Grid/Layout'
import {SocialMedia} from '../../socialMedia'

export default ({data}) => {
  return (
    <Footer>
            <Layout container md lg xl direction="row-reverse" justify="space-between" alignItems="center">
              <SocialMedia data={data}/>
              <Layout item width="40%">
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
                </Layout>
            </Layout>
          </Footer>
  )
}
