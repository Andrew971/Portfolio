import React, {Component} from "react";
import {FooterEn} from './en'
import {FooterFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class FooterContent extends Component {

  render() {
    const { history,Language,dispatch} = this.props;
    switch (Language) {
      case 'En':
        return (<FooterEn history={history} dispatch={dispatch}/>)
      case 'Fr':
        return (<FooterFr history={history} dispatch={dispatch}/>)
      default:
        return (<FooterEn history={history} dispatch={dispatch}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(FooterContent));
