import React, {Component,Fragment} from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'
import Card from "../../Components/Card";
import background from '../../Assets/img/background1.jpg';
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import logo from '../../Assets/img/logo.svg';

const Contact = ({dispatch}) => (
  <Card  className="row align-items-center justify-content-center" src={background}>
    <Mask primary>
      <img src={logo} className="App-logo col-12" alt="logo"/>

        <HeadTitle className="col-12">Si tu n'y arrives pas la première fois;<br/>Appelle ça version 1.0
        </HeadTitle>
        <div className="col-12" align="center">
          <Button onClick={() => {
              dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Contact"}}))
           }} primary="primary">J'ai besoin d'un site</Button>
          <Button onClick={() => {
              dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Hire"}}))
            }}>J'embauche</Button>
        </div>
    </Mask>
  </Card>
);

export class FooterFr extends Component {
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

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus}

}
export default withRouter(connect(mapStateToProps)(FooterFr));
