import React, {Component,Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import MobileNav from "../../Components/MobileNav";
import NavContent from '../../Content/NavLink'
import Spacer from '../../Components/Spacer';
import Hamburger from '../../Components/Icon/hamburger';

class Nav extends Component {
constructor(props) {
  super(props);
  this.state = {
    visible:false,
    width:0,
  };
}
// componentDidMount = () => {
//   window.addEventListener("click", this.clickOut);
// };
// clickOut=(e)=>{
//   const { visible}= this.state
//   // let test = e.target.id || "try me";
//   // console.log(test)
//   // if(test==="clickIn"&&visible){this.toggleHide()}
// }
toggleShow=()=>{
  this.setState({visible:true, width:80})
}
toggleHide=()=>{
  this.setState({visible:false, width:0})
}
  render() {
    const {data} = this.props
    const {visible} = this.state
    const Nav = data.Nav.field.map(nav=>
      (nav.placement === 'page 1')
      ? nav.option
      :[]
    )
    return (
      <NavBar open={visible}>
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
      <Spacer />
      <DesktopView>
        <NavContent   data={nav} toggleHide={this.toggleHide}/>
      </DesktopView>
      <MobileView>
        <div onClick={()=>{
          visible? this.toggleHide() : this.toggleShow()
            }}><Hamburger open={visible}/></div>
        <MobileNav width={this.state.width} onBlure={e => this.clickOut(e)}
        id="clickIn">
        <NavContent   data={nav} toggleHide={this.toggleHide}/>
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
