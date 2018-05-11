import React, {Component} from "react";
import {HeaderEn} from './en'
import {HeaderFr} from './fr'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class HeaderContent extends Component {

  render() {
    const { history,Language,dispatch} = this.props;
    switch (Language) {
      case 'En':
        return (<HeaderEn history={history} dispatch={dispatch}/>)
      case 'Fr':
        return (<HeaderFr history={history} dispatch={dispatch}/>)
      default:
        return (<HeaderEn history={history} dispatch={dispatch}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(HeaderContent));
