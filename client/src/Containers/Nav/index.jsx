import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import {withRouter,NavLink} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import MobileNav from "../../Components/MobileNav";
import logo from '../../Assets/img/logo.svg';
import NavContent from '../../Content/NavLink'
import {UIAction} from "../../Modules/UI";

const MobileNavLink = ({dispatch,Language,toggleHide}) => (
  <Fragment><div style={{fontSize:'3rem', position:'absolute', top:0,right:'25px'}} onClick={()=>{
    toggleHide()
  }}>&times;</div>
<NavLink to='/' onClick={()=>{
  toggleHide()
  }}>Portfollio</NavLink>
  <NavLink to='/skills' onClick={()=>{
    toggleHide()
    }}>Skills</NavLink>
    <li>
      {Language === 'Fr'
      ?'Français'
    :'English'}
      <div className="dropdown-content">
        <span onClick={e => {
            dispatch(UIAction({type: "CHANGE_LANG", payload: "Fr"}));
          }}>Français</span>
        <span onClick={e => {
            dispatch(UIAction({type: "CHANGE_LANG", payload: "En"}));
          }}>English</span>
      </div>
    </li></Fragment>
);

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
