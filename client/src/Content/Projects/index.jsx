import React, {Component} from "react";
import {ProjectEn} from './en'
import {ProjectFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Projects extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<ProjectEn/>)
      case 'Fr':
        return (<ProjectFr/>)
      default:
        return (<ProjectEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(Projects));
