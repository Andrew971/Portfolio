import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import TemplateLoad from './Templates'
import {withRouter} from 'react-router-dom'
import Copyright from './Copyright'
class Footer extends Component {

  render() {
    const {data, share, dispatch} = this.props
    const {background, button, logo, subtitle, title} = data.Footer.option

    const {socialLink} = share
    return (
      <Fragment>
          <TemplateLoad
            type="contact"
            dispatch={dispatch}
            background={background}
            button={button}
            logo={logo}
            subtitle={subtitle}
            title={title}/>
        <Copyright data={socialLink}/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.Share.Theme, data: state.Share.websiteContent, share: state.Share.sharedContent};
};

export default withRouter(connect(mapStateToProps)(Footer));
