import React from "react";
import Button from '../../../Components/Button'
import {Title} from '../../../Components/Text'
import {SectionCard} from "../../../Components/Cards";
import IconLoad from '../../../Components/SvgIcon/'
import {sort_by} from '../../../Utils/constants/constMethod'

const Contact = ({dispatch, background, button, logo, subtitle, title}) => {
  return (
    <SectionCard src={background.path}>
        <IconLoad size={10} icon={logo.icon} alt="logo"/>
        <Title>
          {title.text}</Title>
        <div align="center">
          {button
            .field
            .sort(sort_by('DESC','order'))
            .map((button, n) => <Button
              key={n}
              onClick={() => {
              dispatch({
                type: "MODAL_DISPLAY",
                payload: {
                  flag: true,
                  type: button.name
                }
              })
            }}
              primary={n === 0
              ? true
              : false}>{button.text}</Button>)}
        </div>
        <div
          style={{
          marginTop: '2rem',
          color: 'white'
        }}
          align="center">
          <label>{subtitle.text}</label>
          <div align="center">
            <select
              onChange={e => {
              dispatch({type: "CHANGE_THEME", payload: e.target.value});
            }} 
              style={{
              backgroundColor: 'white',
              color: 'black',
              textAlign: 'center'
            }}>
              <option>...</option>
              <option value="SkyBlue">SkyBlue</option>
              <option value="OrangeWild">OrangeWild</option>
              <option value="PowerRed">PowerRed</option>
            </select>
          </div>
        </div>
    </SectionCard>
  )
};

export default Contact