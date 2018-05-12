import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {SocialMedia} from '../../Content/socialMedia'
import FooterContent from '../../Content/Footer'
import Footer from '../../Components/Footer'

class footer extends Component {

  render() {

    return (
      <Fragment>
      <FooterContent />
    <Footer className="row align-items-center justify-content-center">

              <div className="col-12 order-last order-md-first col-md" style={{margin:'1rem 0',color:'white'}}>
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
              </div>
              <SocialMedia/>
    </Footer>
    </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Theme: state.UI.Theme
  };
};

export default connect(mapStateToProps)(footer);
