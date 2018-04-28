import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UIAction} from "../../Modules/UI";

class Ads extends Component {

  render() {
    const {dispatch} = this.props;

    return (
    <footer className="">
    <select
                onChange={e => {
                dispatch(UIAction({type: "CHANGE_THEME", payload: e.target.value}));
              }}
                style={{
                backgroundColor: 'transparent',
                border: 0,
                color: 'white'
              }}
                >
                <option value="Main">Main</option>
                <option value="Blue">Blue</option>
              </select>
    </footer>
    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme};
};

export default connect(mapStateToProps)(Ads);
