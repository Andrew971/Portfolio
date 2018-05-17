import React,{Fragment} from "react";
import NavItem from "../../Components/NavLink";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import Icon from '../../Components/icon'


export const NavContentFr = ({dispatch,Language,icon, iconToggle}) => (
  <NavItem>
    <ul>
      <li>
        <NavLink to="/">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/skills">Compétences</NavLink>
      </li>
      <li style={{float:'right'}} onClick={() => {
          iconToggle()
        }}>
      <Icon/>
        {
          icon &&
          <Fragment>
        <div className="dropdown-content">
          <span onClick={e => {
              dispatch(UIAction({type: "CHANGE_LANG", payload: "Fr"}));
            }}>Français</span>
          <span onClick={e => {
              dispatch(UIAction({type: "CHANGE_LANG", payload: "En"}));
            }}>English</span>
        </div>
      </Fragment>
    }
      </li>
    </ul>
  </NavItem>
);
