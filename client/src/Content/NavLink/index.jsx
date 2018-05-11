import React, {Component} from "react";
import {NavContentEn} from './en'
import {NavContentFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class NavContent extends Component {

  render() {
    const {Language,dispatch} = this.props
    switch (Language) {
      case 'En':
        return (<NavContentEn dispatch={dispatch} Language={Language}/>)
      case 'Fr':
        return (<NavContentFr dispatch={dispatch} Language={Language}/>)
      default:
        return (<NavContentEn dispatch={dispatch} Language={Language}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavContent));
