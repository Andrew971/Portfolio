import React, {Component} from "react";
import {WorkEn} from './en'
import {WorkFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Work extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<WorkEn/>)
      case 'Fr':
        return (<WorkFr/>)
      default:
        return (<WorkEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(About));
