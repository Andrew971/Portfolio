import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {NavBar, MobileNav} from "../../Components/Nav";
import {BrandTitle} from "../../Components/Text";
import NavContent from './Content'
import IconLoad from '../../Components/SvgIcon/'
import HiddenView from '../../Components/HiddenView/'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      width: 0
    };
  }

  toggleShow = () => {
    this.setState({visible: true, width: 80})
  }
  toggleHide = () => {
    this.setState({visible: false, width: 0})
  }

  render() {
    const {data,share, dispatch, Language} = this.props
    const {visible} = this.state
    const {logo, link} = data.Nav.option
    const {langIcon} = share.option

    return (
      <NavBar open={visible}>
        <BrandTitle to={logo.url}>
          {logo.img_src || logo.icon
            ? <IconLoad icon={logo.icon}/>
            : logo.text
}
        </BrandTitle>
        <HiddenView xs>
          <NavContent
            Link={link}
            LangIcon={langIcon}
            toggleHide={this.toggleHide}
            dispatch={dispatch}
            Language={Language}/>
        </HiddenView>
        <HiddenView md lg xl>
          <div
            onClick={() => {
            visible
              ? this.toggleHide()
              : this.toggleShow()
          }}><IconLoad icon={'hamburger'} open={visible}/></div>
          <MobileNav
            width={this.state.width}
            onBlure={e => this.clickOut(e)}
            id="clickIn">
            <NavContent
              Link={link}
              LangIcon={langIcon}
              toggleHide={this.toggleHide}
              dispatch={dispatch}
              Language={Language}z/>
          </MobileNav>

        </HiddenView>

      </NavBar>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state.UI.websiteContent, 
    share: state.UI.sharedContent,
     Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(Nav));