import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FooterSection from '../../Modules/Footer'
import {withRouter} from 'react-router-dom'
import Copyright from './Copyright'
class Footer extends Component {

  render() {
    const {pathname} = this.props.location
    const {data,share} = this.props
    const footerData = data
      .Footer
      .field
      .filter(footer => (footer.placement === pathname))
      .map(footer => footer.option)
      const{socialLink} = share.option
    return (
      <Fragment>
        {footerData.map((footer, n) => <Fragment key={n}>
          <FooterSection data={footer}/>
        </Fragment>)}
        <Copyright data={socialLink}/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme, data: state.UI.websiteContent,    share: state.UI.sharedContent,
  };
};

export default withRouter(connect(mapStateToProps)(Footer));
