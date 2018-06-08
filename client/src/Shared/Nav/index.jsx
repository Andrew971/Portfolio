import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {NavBar,MobileNav} from "../../Components/Nav";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import NavContent from './Content'
import Spacer from '../../Components/Spacer';
import Hamburger from '../../Components/Icon/hamburger';

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
    const {data, dispatch, Language} = this.props
    const {visible} = this.state
    const Nav = data
      .Nav
      .field
      .map(nav => (nav.placement === 'page 1')
        ? nav.option
        : [])
    return (
      <NavBar open={visible}>
        {Nav.map((nav, n) => {
          const {logo} = nav
          return (
            <Fragment key={n}>
              <BrandTitle to={logo.url}>
                {logo.img_src
                  ? <img src={logo.img_src} className="App-logo" alt="logo"/>
                  : logo.text
}
              </BrandTitle>
              <Spacer/>
              <DesktopView>
                <NavContent
                  data={nav}
                  toggleHide={this.toggleHide}
                  dispatch={dispatch}
                  Language={Language}/>
              </DesktopView>
              <MobileView>
                <div
                  onClick={() => {
                  visible
                    ? this.toggleHide()
                    : this.toggleShow()
                }}><Hamburger open={visible}/></div>
                <MobileNav
                  width={this.state.width}
                  onBlure={e => this.clickOut(e)}
                  id="clickIn">
                  <NavContent
                    data={nav}
                    toggleHide={this.toggleHide}
                    dispatch={dispatch}
                    Language={Language}z/>
                </MobileNav>

              </MobileView>
            </Fragment>
          )
        })}
      </NavBar>
    );
  }
}
const mapStateToProps = state => {
  return {data: state.UI.websiteContent,Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(Nav));
