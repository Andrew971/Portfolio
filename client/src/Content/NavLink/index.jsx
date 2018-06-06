import React, {Component,Fragment} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import NavItem from "../../Components/NavLink";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import Icon from '../../Components/icon'
class NavContent extends Component {
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
    const {dispatch,data,toggleHide,Language} = this.props
    let {link,langIcon} = data

    return(
      <Fragment>
      {link.field.map((link,n)=>
        <NavItem key={n}>
            <NavLink to={link.url} onClick={() => {
      toggleHide()
    }}>{link.text}</NavLink>
          </NavItem>
        )}
        <NavItem id="icon">
        {langIcon
        .field
        .filter(icon=>icon.code === Language)
        .map((lang,n)=>
          <Icon onClick={() => {
              this.iconToggle()
            }} src={lang.icon} key={n}/>
          )}
            <div className="dropdown" onClick={() => {
      toggleHide()
    }}>
            {langIcon
            .field
            .map((lang,n)=>
              <span onClick={e => {
                  dispatch(UIAction({type: "CHANGE_LANG", payload: lang.code}));
                }} key={n}>{lang.text}</span>
              )}
            </div>
              
          </NavItem>
    
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavContent));
