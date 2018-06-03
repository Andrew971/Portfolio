import React, {Component,Fragment} from "react";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import Icon from '../../Components/icon'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class MobileNavLink extends Component {
constructor(props) {
  super(props);
  this.state = {
    iconFlag:false
  };
}
iconToggle=()=>{
  this.setState({
    iconFlag:!this.state.iconFlag
  })
}
  render() {
    const {dispatch,toggleHide, data} = this.props
    const {iconFlag} =this.state
    let {link,langIcon} = data

  return(<Fragment>
  <div style={{
      fontSize: '3rem',
      position: 'absolute',
      top: 0,
      right: '25px'
    }} onClick={() => {
      toggleHide()
    }}>&times;</div>
    {link.field.map((link,n)=>
        <NavLink to={link.url} onClick={() => {
      toggleHide()
    }} key={n}>{link.text}</NavLink>
    )}
  <li onClick={() => {
      this.iconToggle()
    }}>
    <Icon/>
    {
      iconFlag &&
      <Fragment>
        <div className="dropdown-content">
        {langIcon.field.map((lang,n)=>
          <span onClick={e => {
              dispatch(UIAction({type: "CHANGE_LANG", payload: lang.code}));
            }} key={n}>{lang.text}</span>
          )}
        </div>
      </Fragment>
    }
  </li>
</Fragment>)
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(MobileNavLink));
