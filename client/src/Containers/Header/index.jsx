import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'

class HeaderContainer extends Component {

  render() {
    const { history} = this.props;

    return (<header>
      <Mask className="row">
            <HeadTitle className="col-12">If at first you don’t succeed;<br/>
              call it version 1.0</HeadTitle>
          <div className="col-12" align="center">
            <Button onClick={() => { history.push("/") }} primary>My project</Button>
          <Button onClick={() => { history.push("/skills") }}>My skills</Button>
          </div>
      </Mask>
    </header>);
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
