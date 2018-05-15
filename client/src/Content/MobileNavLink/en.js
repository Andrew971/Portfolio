import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import Icon from '../../Components/icon'

export const MobileNavLinkEn = ({dispatch, Language, toggleHide, icon, iconToggle}) => (<Fragment>
  <div style={{
      fontSize: '3rem',
      position: 'absolute',
      top: 0,
      right: '25px'
    }} onClick={() => {
      toggleHide()
    }}>&times;</div>
  <NavLink to='/' onClick={() => {
      toggleHide()
    }}>Portfollio</NavLink>
  <NavLink to='/skills' onClick={() => {
      toggleHide()
    }}>Skills</NavLink>
  <li onClick={() => {
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
</Fragment>);
