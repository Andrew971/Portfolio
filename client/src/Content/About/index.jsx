import React, {Component} from "react";
import {AboutEn} from './en'
import {AboutFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class About extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<AboutEn/>)
      case 'Fr':
        return (<AboutFr/>)
      default:
        return (<AboutEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(About));
