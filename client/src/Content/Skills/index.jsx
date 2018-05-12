import React, {Component} from "react";
import SkillEn from './en'
import SkillFr from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Skills extends Component {
  componentDidMount=()=>{
    window.scrollTo(0,0)
  }
  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<SkillEn/>)
      case 'Fr':
        return (<SkillFr/>)
      default:
        return (<SkillEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(Skills));
