import React, {Component, Fragment} from "react";
import Button from '../../Components/Button'
import {Title} from '../../Components/Text'
import {SectionCard} from "../../Components/Cards";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import IconLoad from '../../Components/SvgIcon/'
import {sort_by} from '../../utils/constMethod'

const Contact = ({dispatch, data}) => {
  const {background, title, subtitle, button, logo} = data
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

export class FooterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {dispatch, data} = this.props
    return (
      <Fragment>
        <Contact dispatch={dispatch} data={data}/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus, Theme: state.UI.Theme}

}
export default withRouter(connect(mapStateToProps)(FooterSection));
