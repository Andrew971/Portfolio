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
import {TextField} from '../../Components/inputForm'
import {Layout, Grid} from '../../Components/Grid'

const ContactForm = ({dispatch, modalSAtatus, data}) => {
  // const {title} = data
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalClose
          onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times;</ModalClose>

        <ModalHeader>
          <h5>J'ai besoin d'un site internet?</h5>
        </ModalHeader>
        <form ref={self => this.contactForm = self}>
          <Grid container md lg xl grid={2}>
            <Grid items>
              <TextField
                type="text"
                label="Nom"
                name="lastname"
                placeholder="Last name"
                id="stmt"
                autoComplete="family-name"/>
            </Grid>
            <Grid Grid items>
              <TextField
                type="text"
                label="Prénom"
                name="firstname"
                placeholder="first name"
                id="stmt"
                autoComplete="given-name"/>
            </Grid>
            <Grid items>
              <TextField
                type="text"
                label="Téléphone"
                name="phone"
                placeholder="numéro de téléphone"
                id="stmt"
                autoComplete="tel-national"/>

            </Grid>
            <Grid items>
              <TextField
                label="Langue de préférence"
                name="language"
                id="stmt"
                autoComplete="language"
                select
                defaultValue="">
                <option disabled></option>
                <option value="English">English</option>
                <option value="french">French</option>
              </TextField>
            </Grid>
            <Grid items md lg xl span={2}>
              <TextField
                type="text"
                label="E-mail"
                name="email"
                placeholder="exemple@xxxx.com"
                id="stmt"
                autoComplete="email"/>
            </Grid>
            <Grid items md lg xl span={2}>
              <TextField
                label="Message"
                name="message"
                rows="4"
                placeholder="Ecrivez les informations clé de votre projet."
                id="stmt"
                autoComplete="tel-national"
                multiline/>
            </Grid>
            {modalSAtatus === false && <Grid items md lg xl span={2}>
              <ModalError>
              Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.
              </ModalError>
            </Grid>
}
          </Grid>

        </form>

        <ModalFooter>
          <Layout container md lg xl direction="row">
            <Layout items>
              <ModalButton
                onClick={() => {
                dispatch({type: "MODAL_HIDE", payload: false})
              }}>&times; Fermer</ModalButton>
            </Layout>
            <Layout items>
              <ModalButton
                onClick={() => {
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
              }}
                primary="primary">Envoyer</ModalButton>
            </Layout>
          </Layout>
        </ModalFooter>
      </ModalContent>

    </ModalWrapper>
  )
};

const HireForm = ({dispatch, modalSAtatus, data}) => {
  // const {title} = data
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalClose
          onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times;</ModalClose>

        <ModalHeader>
          <h5>J'embauche</h5>
        </ModalHeader>
        <form ref={self => this.contactForm = self}>
          <Grid container md lg xl grid={2}>
          <Grid items>
              <TextField
                type="text"
                label="Nom"
                name="lastname"
                placeholder="Nom"
                id="stmt"
                autoComplete="family-name"/>
            </Grid>
            <Grid Grid items>
              <TextField
                type="text"
                label="Prénom"
                name="firstname"
                placeholder="Prénom"
                id="stmt"
                autoComplete="given-name"/>
            </Grid>
            
            <Grid items>
              <TextField
                type="text"
                label="Téléphone"
                name="phone"
                placeholder="Téléphone"
                id="stmt"
                autoComplete="tel-national"/>

            </Grid>
            <Grid items>
              <TextField
                label="Langue de préférence"
                name="language"
                id="stmt"
                autoComplete="language"
                select
                defaultValue="">
                <option disabled></option>
                <option value="English">English</option>
                <option value="french">French</option>
              </TextField>
            </Grid>
            <Grid items>
              <TextField
                type="text"
                label="E-mail"
                name="email"
                placeholder="exemple@xxxx.com"
                id="stmt"
                autoComplete="email"/>
            </Grid>
            <Grid items>
              <TextField
                type="text"
                label="Entreprise"
                name="company"
                placeholder="Entreprise"
                id="stmt"
                autoComplete="company"/>
            </Grid>
            <Grid items md lg xl span={2}>
              <TextField
                label="Message"
                name="message"
                rows="4"
                placeholder="Tell me the headlines of your project."
                id="stmt"
                autoComplete="tel-national"
                multiline/>
            </Grid>
            {modalSAtatus === false && <Grid items style={{
              gridColumn: 'span 2'
            }}>
              <ModalError>
                Sorry...A problem occured when we tried to send your email. Please check your
                internet connection and try again.
              </ModalError>
            </Grid>
}
          </Grid>

        </form>

        <ModalFooter>
          <Layout container md lg xl direction="row">
            <Layout items>
              <ModalButton
                onClick={() => {
                dispatch({type: "MODAL_HIDE", payload: false})
              }}>&times; Close</ModalButton>
            </Layout>
            <Layout items>
              <ModalButton
                onClick={() => {
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
                    subject: "I want a website",
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    phone: phone.value,
                    language: language.value,
                    message: message.value,
                    company: company.value

                  }
                })
              }}
                primary="primary">Send</ModalButton>
            </Layout>
          </Layout>
        </ModalFooter>
      </ModalContent>

    </ModalWrapper>
  )
};



export const Confirmation = ({dispatch}) => (<ModalWrapper>

<ModalContent>
  <ModalConfirm>
  Félicitation ! Nous avons envoyé votre email avec succés.
      <p>Je vous recontacterai sous 48h.
      </p>
      <p>Merci.</p>
  </ModalConfirm>
  <Layout container>
    <Layout items justify="center">
    <ModalButton onClick={() => {
        dispatch({type: "MODAL_HIDE", payload: false})
      }}>&times; Fermer</ModalButton>
      </Layout>
  </Layout>
</ModalContent>

</ModalWrapper>);class ModalFr extends Component {

  render() {
    const {Modal, dispatch, modalSAtatus} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactForm dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Hire':
        return (<HireForm dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Confirmation':
        return (<Confirmation dispatch={dispatch}/>)
      default:
        return (<ContactForm dispatch={dispatch} modalSAtatus={modalSAtatus}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus}

}
export default withRouter(connect(mapStateToProps)(ModalFr));

