import React, {Component} from "react";
import {MobileNavLinkEn} from './en'
import {MobileNavLinkFr} from './fr'
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
    const {Language,dispatch,toggleHide} = this.props
    switch (Language) {
      case 'En':
        return (<MobileNavLinkEn dispatch={dispatch} Language={Language} toggleHide={toggleHide} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>)
      case 'Fr':
        return (<MobileNavLinkFr dispatch={dispatch} Language={Language} toggleHide={toggleHide} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>)
      default:
        return (<MobileNavLinkEn dispatch={dispatch} Language={Language} toggleHide={toggleHide} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(MobileNavLink));
