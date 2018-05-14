import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import HeaderContent from '../../Content/Header'
import Header from '../../Components/Header'

class HeaderContainer extends Component {

  render() {
    const {pathname} = this.props.location
    console.log(pathname)
    return (<Header location={pathname}>
    <HeaderContent/>
    </Header>);
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
