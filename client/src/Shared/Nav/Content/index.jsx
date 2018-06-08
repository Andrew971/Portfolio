import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import NavItem from "../../../Components/NavLink";
import Icon from '../../../Components/icon'

export default ({dispatch,data,toggleHide,Language}) => {
  let {link,langIcon} = data

  return(
      <Fragment>
      {link.field.map((link,n)=>
        <NavItem key={n}>
            <NavLink to={link.url} onClick={() => {
      toggleHide()
    }}>{link.text}</NavLink>
          </NavItem>
        )}
        <NavItem id="icon">
        {langIcon
        .field
        .filter(icon=>icon.code === Language)
        .map((lang,n)=>
          <Icon src={lang.icon} key={n}/>
          )}
            <div className="dropdown" onClick={() => {
      toggleHide()
    }}>
            {langIcon
            .field
            .map((lang,n)=>
              <span onClick={e => {
                  dispatch({type: "CHANGE_LANG", payload: lang.code});
                }} key={n}>{lang.text}</span>
              )}
            </div>
              
          </NavItem>
    
      </Fragment>
    )
  }

