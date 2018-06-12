import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {NavItem} from "../../../Components/Nav";
import Icon from '../../../Components/icon'
import {sort_by} from '../../../utils/constMethod'

export default ({dispatch,Link,LangIcon,toggleHide,Language,}) => {

  return(
      <Fragment>
      {Link
      .field
      .sort(sort_by('DESC','order'))
      .map((link,n)=>
        <NavItem key={n}>
            <NavLink to={link.url} onClick={() => {
      toggleHide()
    }}>{link.text}</NavLink>
          </NavItem>
        )}
        <NavItem id="icon">
        {LangIcon
        .field
        .sort(sort_by('DESC','order'))
        .filter(icon=>icon.code === Language)
        .map((lang,n)=>
          <Icon src={lang.icon} key={n}/>
          )}
            <div className="dropdown" onClick={() => {
      toggleHide()
    }}>
            {LangIcon
            .field
            .sort(sort_by('DESC','order'))
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

