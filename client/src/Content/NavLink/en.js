import React from "react";
import NavItem from "../../Components/NavLink";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";


export const NavContentEn = ({dispatch,Language}) => (
  <NavItem>
    <ul>
      <li>
        <NavLink to="/">Portfollio</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        {Language === 'Fr'
        ?'Français'
      :'English'}
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
