import React, {Component} from "react";
import {NavContentEn} from './en'
import {NavContentFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

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
    const {Language,dispatch} = this.props

    switch (Language) {
      case 'En':
        return (<NavContentEn dispatch={dispatch} Language={Language} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>)
      case 'Fr':
        return (<NavContentFr dispatch={dispatch} Language={Language} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>)
      default:
        return (<NavContentEn dispatch={dispatch} Language={Language} icon={this.state.iconFlag} iconToggle={this.iconToggle}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavContent));
