import React, {Component,Fragment} from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'
import Card from "../../Components/Card";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';

const Contact = ({dispatch,data}) => {
  const {background,title,subtitle,button,logo} = data
  return(
  <Card  className="row align-items-center justify-content-center" src={background.path}>
    <Mask primary>
      <img src={logo.img_src} className="App-logo col-12" alt="logo"/>
      <HeadTitle className="col-12">{title.text}</HeadTitle>
      <div className="col-12" align="center">
      {button.field.map((button,n)=>
          <Button key={n} onClick={() => {
            dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:button.name}}))
         }} primary={n ===0?true:false}>{button.text}</Button>
        )}
      </div>
      <div className="col-12" style={{marginTop:'2rem', color:'white'}} align="center">
        <h5>{subtitle.text}</h5>
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
)};

export class FooterEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
const {dispatch, data} = this.props
    return (
      <Fragment>
        <Contact dispatch={dispatch} data={data} />
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
