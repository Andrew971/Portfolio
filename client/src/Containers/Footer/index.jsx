import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {SocialMedia} from '../../Content/socialMedia'
import FooterContent from '../../Content/Footer'
import {withRouter} from 'react-router-dom'
import Footer from '../../Components/Footer'

class FooterContainer extends Component {

  render() {
    const {pathname} = this.props.location
    const { data} = this.props
    const footerData = data.Footer.field.filter(footer=>(footer.placement === pathname)).map(footer=>footer.option)
    return (
      <Fragment>
      {footerData.map((footer,n)=>
        <Fragment key={n}>
      <FooterContent  data={footer}/>
    <Footer className="row align-items-center justify-content-center">

              <div className="col-12 order-last order-md-first col-md" style={{margin:'1rem 0',color:'white'}}>
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
              </div>
              <SocialMedia data={footer}/>
              </Footer>
              </Fragment>
            )}
    </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Theme: state.UI.Theme,
    data: state.UI.websiteContent
  };
};

export default withRouter(connect(mapStateToProps)(FooterContainer));
