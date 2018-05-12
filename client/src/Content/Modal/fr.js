import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {UIAction} from '../../Modules/UI'
import {contactAction} from '../../Modules/Contact'
import ModalWrapper from '../../Components/ModalWrapper'
import ModalContent from '../../Components/ModalContent'
import ModalClose from '../../Components/ModalClose'
import ModalHeader from '../../Components/ModalHeader'
import ModalFooter from '../../Components/ModalFooter'
import ModalButton from '../../Components/ModalButton'
import ModalError from '../../Components/ModalError'
import ModalConfirm from '../../Components/ModalConfirm'

export const ContactFr = ({dispatch, modalSAtatus}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
      }}>&times;</ModalClose>

    <ModalHeader>
      <h5>J'ai besoin d'un site internet</h5>
    </ModalHeader>
    <form ref={self => this.contactForm = self}>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <label>Nom</label>
          <input type="text" placeholder="Name" name="lastname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Prénom</label>
          <input type="text" placeholder="Name" name="firstname"/>
        </div>

        <div className="col-12 col-md-6">
          <label>Téléphone</label>
          <input type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Langue de préférence</label>
          <select name="language" defaultValue="English">
            <option>Anglais</option>
            <option>Français</option>
          </select>
        </div>
        <div className="col-12 col-md-12">
          <label>E-mail</label>
          <input type="email" placeholder="Name" name="email"/>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea rows="4" placeholder="Ecrivez les informations clées de votre project" name="message"></textarea>
        </div>
        {
          modalSAtatus === false && <ModalError className="col-12">
          Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.
            </ModalError>
        }
      </div>

    </form>
    <ModalFooter className="row">
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
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

            dispatch(contactAction({
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
            }))

          }} primary="primary">Send</ModalButton>
      </div>
    </ModalFooter>
  </ModalContent>

</ModalWrapper>);




export const HireFr = ({dispatch,modalSAtatus}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
      }}>&times;</ModalClose>

    <ModalHeader>
      <h5>J'embauche</h5>
    </ModalHeader>
    <form ref={self => this.contactForm = self}>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <label>Nom</label>
          <input type="text" placeholder="Name" name="lastname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Prénom</label>
          <input type="text" placeholder="Name" name="firstname"/>
        </div>

        <div className="col-12 col-md-6">
          <label>Téléphone</label>
          <input type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Langue de préférence</label>
          <select name="language" defaultValue="English">
            <option>Anglais</option>
            <option>Français</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label>Entreprise</label>
          <input type="text" placeholder="Name" name="company"/>
        </div>
        <div className="col-12 col-md-6">
          <label>E-mail</label>
          <input type="email" placeholder="Name" name="email"/>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea rows="4" placeholder="Decrivez le poste que vous offrez." name="message"></textarea>
        </div>
        {
          modalSAtatus === false && <ModalError className="col-12">
          Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.
            </ModalError>
        }
      </div>

    </form>
    <ModalFooter className="row">
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
          }}>&times; Fermer</ModalButton>
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

            dispatch(contactAction({
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
            }))

          }} primary="primary">Envoyer</ModalButton>
      </div>
    </ModalFooter>
  </ModalContent>

</ModalWrapper>);

export const Confirmation = ({dispatch}) => (<ModalWrapper>

  <ModalContent>
    <ModalConfirm>
      Félicitation ! Nous avons envoyé votre email avec succés.
      <p>Je vous recontacterais sous 48h.
      </p>
      <p>Merci.</p>
    </ModalConfirm>
    <div className="col-12" align="center">
      <ModalButton onClick={() => {
          dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
        }}>&times; Close</ModalButton>
    </div>
  </ModalContent>

</ModalWrapper>);

class ModalFr extends Component {

  render() {
    const {Modal, dispatch, modalSAtatus} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Hire':
        return (<HireFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Confirmation':
        return (<Confirmation dispatch={dispatch}/>)
      default:
        return (<ContactFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus}

}
export default withRouter(connect(mapStateToProps)(ModalFr));
