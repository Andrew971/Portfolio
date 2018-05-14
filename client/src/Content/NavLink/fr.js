import React from "react";
import NavItem from "../../Components/NavLink";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";


export const NavContentFr = ({dispatch,Language}) => (
  <NavItem>
    <ul>
      <li>
        <NavLink to="/">Portfollio</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Compétences</NavLink>
      </li>
      <li style={{margin:'0 2rem'}}>
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
