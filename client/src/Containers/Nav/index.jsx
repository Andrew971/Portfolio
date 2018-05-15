import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import MobileNav from "../../Components/MobileNav";
import logo from '../../Assets/img/logo.svg';
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
    const {visible,Language,dispatch} = this.props
    return (<NavBar className="row align-content-center">
      <BrandTitle to="/" className="col-9 col-md-2">
        {
          logo
            ? <img src={logo} className="App-logo" alt="logo"/>
            : 'AS'
        }
      </BrandTitle>
      <DesktopView className="col-sm col-md">
        <NavContent/>
      </DesktopView>
      <MobileView className="col" align="right">
        <div style={{fontSize:'3rem'}} onClick={()=>{
              this.toggleShow()
            }}><i className={(visible)?"fa fa-window-close":"fa fa-bars"}></i></div>

        <MobileNav width={this.state.width}>
<MobileNavLink Language={Language} dispatch={dispatch} toggleHide={this.toggleHide}/>
        </MobileNav>

      </MobileView>
    </NavBar>);
  }
}
const mapStateToProps = state => {
  return {Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(Nav));
