import React, {Component} from "react";
import {EduEn} from './en'
import {EduFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Work extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<EduEn/>)
      case 'Fr':
        return (<EduFr/>)
      default:
        return (<EduEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(About));
