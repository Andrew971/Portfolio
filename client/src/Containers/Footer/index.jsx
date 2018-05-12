import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {UIAction} from "../../Modules/UI";
import {SocialMedia} from '../../Content/socialMedia'
import FooterContent from '../../Content/Footer'
class footer extends Component {

  render() {
    const {dispatch} = this.props;

    return (
      <Fragment>
      <FooterContent />
    <footer className="row align-items-center justify-content-center">

              <div className="col-12 order-last order-md-first col-md" style={{margin:'1rem 0',color:'white'}}>
                <h6>Copyright © 2018 "Andrew Sordier". All rights reserved</h6>
              </div>
              <SocialMedia/>
    </footer>
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
