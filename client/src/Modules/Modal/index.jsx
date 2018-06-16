import React, {Component,Fragment} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import TemplateLoad from './Templates'

  class Modal extends Component {
  render() {
    const { dispatch, modalSAtatus,Data, ModalType} = this.props
    let type = ModalType.toUpperCase() 
    const ModalData = Data
      .Modal
      .field
      .filter(modal => modal.name.toUpperCase() === type)
      .map(modal=>modal.option)

      return (
      <Fragment>
        {
          ModalData.map((data,n)=>
          <Fragment key={n}>
          <TemplateLoad  type={data.type} dispatch={dispatch} modalSAtatus={modalSAtatus} data={data}/>
          </Fragment>
          )
        }

      </Fragment>
    )
  }
}


const mapStateToProps = (state) => {

  return {
    ModalType: state.Share.Modal, 
  modalSAtatus: state.Share.modalSAtatus,
  Data: state.Share.websiteContent,
  }

}

export default withRouter(connect(mapStateToProps)(Modal));

