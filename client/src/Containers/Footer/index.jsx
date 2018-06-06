import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SocialMedia} from '../../Content/socialMedia'
import FooterContent from '../../Content/Footer'
import {withRouter} from 'react-router-dom'
import Footer from '../../Components/Footer'
import Layout from '../../Components/Grid/Layout'
class FooterContainer extends Component {

  render() {
    const {pathname} = this.props.location
    const {data} = this.props
    const footerData = data
      .Footer
      .field
      .filter(footer => (footer.placement === pathname))
      .map(footer => footer.option)
    return (
      <Fragment>
        {footerData.map((footer, n) => <Fragment key={n}>
          <FooterContent data={footer}/>
          <Footer>
            <Layout container md lg xl direction="row-reverse" justify="space-between" alignItems="center">
              <SocialMedia data={footer}/>
              <Layout item width="40%">
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
                </Layout>
            </Layout>
          </Footer>
        </Fragment>)}

      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme, data: state.UI.websiteContent};
};

export default withRouter(connect(mapStateToProps)(FooterContainer));
