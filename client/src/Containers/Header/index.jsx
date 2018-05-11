import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import HeaderContent from '../../Content/Header'

class HeaderContainer extends Component {

  render() {
    return (<header>
    <HeaderContent/>
    </header>);
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
