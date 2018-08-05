import React, {PureComponent, Fragment} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import TemplateLoad from './Templates'
import {ModalWrapper} from '../../Components/Modal'
import Contact from './Templates/contact'
import Confirmation from './Templates/confirmation'

// class Modal extends PureComponent {   constructor(props) {     super(props)
//   this.state = {       type: "contact"     }   }   componentDidMount =() =>{
//    console.log('ok')     console.log(this.state)     console.log(this.props)
//  }   getData = () => {     const {Data, ModalType} = this.props     let type
// = ModalType.toUpperCase()     // console.log(type)     const fetchData = Data
//       .Modal       .field       .filter(modal => modal.name.toUpperCase() ===
// type)       .map(modal => modal.option)     return fetchData   }   handler =
// (type) =>{      this.setState({type:type})      this.forceUpdate()     }
// render() {     const {dispatch, modalStatus} = this.props     const ModalData
// = this.getData() return (       <ModalWrapper>         {ModalData.map((data,
// n) => {           /* console.log(data) */           return (
// <Fragment key={n}>               <TemplateLoad
// type={this.state.type}                 dispatch={dispatch}
// modalStatus={modalStatus}                 data={data}
// handler={this.handler}/>             </Fragment>           )         }) }
//   </ModalWrapper>     )   } } const mapStateToProps = (state) => {   return
// {ModalType: state.Share.Modal, modalSAtatus: state.Share.modalSAtatus, Data:
// state.Share.websiteContent} } export default
// withRouter(connect(mapStateToProps)(Modal));

class Modal extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      type: "contact"
    }
  }

  componentDidMount = () => {
    console.log('ok')
    console.log(this.state)
    console.log(this.props)
  }
  getData = () => {
    const {Data, ModalType} = this.props
    let type = ModalType.toUpperCase()
    // console.log(type)
    const fetchData = Data
      .Modal
      .field
      .filter(modal => modal.name.toUpperCase() === type)
      .map(modal => modal.option)

    return fetchData[0]
  }

  handler = (type) => {
    this.setState({type: type})
    this.forceUpdate()
  }

  render() {
    const {ModalType, dispatch, modalStatus} = this.props
    const ModalData = this.getData()

    switch (ModalType) {
      case 'Contact':
        return (<ModalWrapper> <Contact
          type={ModalData.type}
          dispatch={dispatch}
          modalStatus={modalStatus}
          data={ModalData}
          handler={this.handler}/></ModalWrapper> )

      case 'Confirmation':
        return (<ModalWrapper> <Confirmation
          type={ModalData.type}
          dispatch={dispatch}
          modalStatus={modalStatus}
          data={ModalData}
          handler={this.handler}/></ModalWrapper> )

      default:
      return (<ModalWrapper> <Contact
        type={ModalData.type}
        dispatch={dispatch}
        modalStatus={modalStatus}
        data={ModalData}
        handler={this.handler}/></ModalWrapper> )

    }
  }
}

const mapStateToProps = (state) => {

  return {ModalType: state.Share.Modal, modalSAtatus: state.Share.modalSAtatus, Data: state.Share.websiteContent}

}

export default withRouter(connect(mapStateToProps)(Modal));