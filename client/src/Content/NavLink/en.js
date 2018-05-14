import React from "react";
import NavItem from "../../Components/NavLink";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import Icon from '../../Components/icon'

export const NavContentEn = ({dispatch,Language}) => (
  <NavItem>
    <ul>
      <li>
        <NavLink to="/">Portfollio</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li style={{float:'right'}}>
      <Icon/>
        <div className="dropdown-content">
          <span onClick={e => {
              dispatch(UIAction({type: "CHANGE_LANG", payload: "Fr"}));
            }}>Français</span>
          <span onClick={e => {
              dispatch(UIAction({type: "CHANGE_LANG", payload: "En"}));
            }}>English</span>
        </div>
      </li>
    </ul>

  </NavItem>
);
