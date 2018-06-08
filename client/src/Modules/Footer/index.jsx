import React, {Component, Fragment} from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import Card from "../../Components/Card";
import Image from "../../Components/Image";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

const Contact = ({dispatch, data}) => {
  const {background, title, subtitle, button, logo} = data
  return (
    <Card src={background.path}>
      <Mask primary>
        <Image size={10} src={logo.img_src} alt="logo"/>
        <HeadTitle>
          {title.text}</HeadTitle>
        <div align="center">
          {button
            .field
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
          <h5>{subtitle.text}</h5>
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
              <option value="Main">SkyBlue</option>
              <option value="Blue">OrangeWild</option>
            </select>
          </div>
        </div>
      </Mask>
    </Card>
  )
};

export class FooterEn extends Component {
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
export default withRouter(connect(mapStateToProps)(FooterEn));
