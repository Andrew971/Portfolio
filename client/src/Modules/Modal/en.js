import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import ModalWrapper from '../../Components/Modal/ModalWrapper'
import ModalContent from '../../Components/Modal/ModalContent'
import ModalClose from '../../Components/Modal/ModalClose'
import ModalHeader from '../../Components/Modal/ModalHeader'
import ModalFooter from '../../Components/Modal/ModalFooter'
import ModalButton from '../../Components/Modal/ModalButton'
import ModalError from '../../Components/Modal/ModalError'
import ModalConfirm from '../../Components/Modal/ModalConfirm'

export const ContactEn = ({dispatch, modalSAtatus}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch({type: "MODAL_HIDE", payload: false})
      }}>&times;</ModalClose>

    <ModalHeader>
      <h5>I want a website</h5>
    </ModalHeader>
    <form ref={self => this.contactForm = self}>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <label>First Name</label>
          <input type="text" placeholder="Name" name="firstname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Last Name</label>
          <input type="text" placeholder="Name" name="lastname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Prefered Language</label>
          <select name="language" defaultValue="English">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
        <div className="col-12 col-md-12">
          <label>E-mail</label>
          <input type="email" placeholder="exemple@xxxx.com" name="email"/>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea rows="4" placeholder="Tell me the headlines of your project." name="message"></textarea>
        </div>
        {
          modalSAtatus === false && <ModalError className="col-12">
              Sorry...A problem occured when we tried to send your email. Please check your internet connection and try again.
            </ModalError>
        }
      </div>

    </form>
    <ModalFooter className="row">
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            dispatch({type: "MODAL_HIDE", payload: false})
          }}>&times; Close</ModalButton>
      </div>
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            const {
              firstname,
              lastname,
              email,
              phone,
              language,
              message
            } = this.contactForm;

            dispatch({
              type: 'SEND_CONTACT_INFO',
              payload: {
                subject: "I want a website",
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                phone: phone.value,
                language: language.value,
                message: message.value
              }
            })

          }} primary="primary">Send</ModalButton>
      </div>
    </ModalFooter>
  </ModalContent>

</ModalWrapper>);




export const HireEn = ({dispatch,modalSAtatus}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch({type: "MODAL_HIDE", payload: false})
      }}>&times;</ModalClose>

    <ModalHeader>
      <h5>I am looking to hire</h5>
    </ModalHeader>
    <form ref={self => this.contactForm = self}>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <label>First Name</label>
          <input type="text" placeholder="Name" name="firstname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Last Name</label>
          <input type="text" placeholder="Name" name="lastname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Prefered Language</label>
          <select name="language" defaultValue="English">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label>Company</label>
          <input type="text" placeholder="Name" name="company"/>
        </div>
        <div className="col-12 col-md-6">
          <label>E-mail</label>
          <input type="email" placeholder="Name" name="email"/>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea rows="4" placeholder="Please give me more information on the role your are offering" name="message"></textarea>
        </div>
        {
          modalSAtatus === false && <ModalError className="col-12">
              Sorry...A problem occured when we tried to send your email. Please check your internet connection and try again.
            </ModalError>
        }
      </div>

    </form>
    <ModalFooter className="row">
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            dispatch({type: "MODAL_HIDE", payload: false})
          }}>&times; Close</ModalButton>
      </div>
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            const {
              firstname,
              lastname,
              email,
              phone,
              language,
              message,
              company
            } = this.contactForm;

            dispatch({
              type: 'SEND_CONTACT_INFO',
              payload: {
                subject: "I want to hire",
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                phone: phone.value,
                language: language.value,
                message: message.value,
                company: company.value
              }
            })

          }} primary="primary">Send</ModalButton>
      </div>
    </ModalFooter>
  </ModalContent>

</ModalWrapper>);

export const Confirmation = ({dispatch}) => (<ModalWrapper>

  <ModalContent>
    <ModalConfirm>
      Congratulation ! We successfully sent your email.
      <p>I will contact you back within 48h.
      </p>
      <p>Thank you.</p>
    </ModalConfirm>
    <div className="col-12" align="center">
      <ModalButton onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times; Close</ModalButton>
    </div>
  </ModalContent>

</ModalWrapper>);

class ModalEn extends Component {

  render() {
    const {Modal, dispatch, modalSAtatus} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactEn dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Hire':
        return (<HireEn dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Confirmation':
        return (<Confirmation dispatch={dispatch}/>)
      default:
        return (<ContactEn dispatch={dispatch} modalSAtatus={modalSAtatus}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus}

}
export default withRouter(connect(mapStateToProps)(ModalEn));
