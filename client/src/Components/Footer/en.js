import React, {Component,Fragment} from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'
import Card from "../../Components/Card";
import background4 from '../../Assets/img/background4.jpg'
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import logo from '../../Assets/img/logo.svg';

const Contact = ({dispatch}) => (
  <Card  className="row align-items-center justify-content-center" src={background4}>
    <Mask primary>
      <img src={logo} className="App-logo col-12" alt="logo"/>
      <HeadTitle className="col-12">If at first you don’t succeed;<br/>
        call it version 1.0</HeadTitle>
      <div className="col-12" align="center">
      <Button onClick={() => {
          dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Contact"}}))
       }} primary>Need a website?</Button>
      <Button onClick={() => {
        dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Hire"}}))
      }}>Looking to hire?</Button>
      </div>
      <div className="col-12" style={{marginTop:'2rem', color:'white'}} align="center">
        <h5>Try and change Theme</h5>
          <div className="col-12 col-md" align="center"><select
                      onChange={e => {
                      dispatch(UIAction({type: "CHANGE_THEME", payload: e.target.value}));
                    }} style={{backgroundColor:'white',color:'black',textAlign:'center'}}>
                      <option value="Main">SkyBlue</option>
                      <option value="Blue">OrangeWild</option>
                    </select></div>
      </div>
    </Mask>
  </Card>
);

export class FooterEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
const {dispatch} = this.props
    return (
      <Fragment>
        <Contact dispatch={dispatch}/>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    Modal: state.UI.Modal,
    modalSAtatus: state.UI.modalSAtatus,
    Theme: state.UI.Theme
}

}
export default withRouter(connect(mapStateToProps)(FooterEn));
