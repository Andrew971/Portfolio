import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import NavBar from "../../Components/NavBar";
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import NavItem from "../../Components/NavLink";


class Nav extends Component {
  render() {
    const {Language, dispatch} = this.props;
    return (
      <NavBar className="row">
        <BrandTitle to="/" className="col-6 col-md-2">
          AS
        </BrandTitle>
        <DesktopView className="col-sm col-md">
          <NavItem>
            <ul>
              <li>
                <NavLink to="/">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/about">Contact</NavLink>
              </li>
              <select
                onChange={e => {
                dispatch(UIAction({type: "CHANGE_LANG", payload: e.target.value}));
              }}
                style={{
                backgroundColor: 'transparent',
                border: 0,
                color: 'white'
              }}
                value={Language}>
                <option value="En">En</option>
                <option value="Fr">Fr</option>
              </select>
            </ul>
          </NavItem>
        </DesktopView>
        <MobileView className="col">
          test
        </MobileView>
      </NavBar>
    );
  }
}
const mapStateToProps = state => {
  return {Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(Nav));
