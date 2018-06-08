import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import FooterContent from '../../Modules/Footer'
import {withRouter} from 'react-router-dom'
import Copyright from './Copyright'
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
          <Copyright data={footer}/>
        </Fragment>)}

      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme, data: state.UI.websiteContent};
};

export default withRouter(connect(mapStateToProps)(FooterContainer));
