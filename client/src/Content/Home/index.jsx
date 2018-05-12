import React, {Component} from "react";
import HomeEn from './en'
import HomeFr from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class Home extends Component {
  componentDidMount=()=>{
    window.scrollTo(0,0)
  }
  render() {
    const {Language} = this.props
    switch (Language) {
      case 'En':
        return (<HomeEn/>)
      case 'Fr':
        return (<HomeFr/>)
      default:
        return (<HomeEn/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(Home));
