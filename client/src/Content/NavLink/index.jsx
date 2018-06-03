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
    const {dispatch,data} = this.props
    const {iconFlag} = this.state
    let {link,langIcon} = data

    return(
      <NavItem>
      <ul>
        {link.field.map((link,n)=>
          <li key={n}>
            <NavLink to={link.url}>{link.text}</NavLink>
          </li>
        )}
          <li style={{float:'right'}} onClick={() => {
              this.iconToggle()
            }} >
          <Icon/>
              {iconFlag && 
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
          
        </ul>
    
      </NavItem>
    )
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavContent));
