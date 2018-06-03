import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import MobileNav from "../../Components/MobileNav";
import NavContent from '../../Content/NavLink'
import MobileNavLink from '../../Content/MobileNavLink';

class Nav extends Component {
constructor(props) {
  super(props);
  this.state = {
    visible:false,
    width:0,
  };
}
toggleShow=()=>{
  this.setState({visible:true, width:250})
}
toggleHide=()=>{
  this.setState({visible:false, width:0})
}
  render() {
    const {visible,Language,dispatch,data} = this.props
    const Nav = data.Nav.field.map(nav=>
      (nav.placement === 'page 1')
      ? nav.option
      :[]
    )
    return (
      <NavBar>
      {Nav.map((nav,n)=>{
        const {logo} = nav
        return(
          <Fragment key={n}>
          <BrandTitle to={logo.url} >
        {
          logo.img_src
            ? <img src={logo.img_src} className="App-logo" alt="logo"/>
            : logo.text
        }
      </BrandTitle>
      <DesktopView className="col-sm col-md">
        <NavContent   data={nav}/>
      </DesktopView>
      <MobileView className="col-2" align="right">
        <div style={{fontSize:'3rem'}} onClick={()=>{
              this.toggleShow()
            }}><i className={(visible)?"fa fa-window-close":"fa fa-bars"}></i></div>

        <MobileNav width={this.state.width}>
        <MobileNavLink Language={Language} dispatch={dispatch} toggleHide={this.toggleHide} data={nav}/>
        </MobileNav>

      </MobileView>
          </Fragment>
      )})}
    </NavBar>
    );
  }
}
const mapStateToProps = state => {
  return {Language: state.UI.Language,
    data: state.UI.websiteContent

  };
};

export default withRouter(connect(mapStateToProps)(Nav));
