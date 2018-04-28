import React, {Component} from 'react';
import {connect} from 'react-redux';
import Ads from '../../Components/Ads'

class AdsContainer extends Component {

  render() {
    return (
      <Ads>
      test
      </Ads>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(AdsContainer);
