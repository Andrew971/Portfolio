import React, {Component,Fragment} from "react";
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
// import {sort_by} from '../../utils/constMethod'
import ContactForm from './Templates/contact'
import {TextField} from '../../Components/inputForm'
import {Layout, Grid} from '../../Components/Grid'


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
          <h5>Looking to hire</h5>
        </ModalHeader>
        <form ref={self => this.contactForm = self}>
          <Grid container md lg xl grid={2}>
            <Grid Grid items>
              <TextField
                type="text"
                label="First Name"
                name="firstname"
                placeholder="first name"
                id="stmt"
                autoComplete="given-name"/>
            </Grid>
            <Grid items>
              <TextField
                type="text"
                label="Last Name"
                name="lastname"
                placeholder="Last name"
                id="stmt"
                autoComplete="family-name"/>
            </Grid>
            <Grid items>
              <TextField
                type="text"
                label="Phone Number"
                name="phone"
                placeholder="Phone Number"
                id="stmt"
                autoComplete="tel-national"/>

            </Grid>
            <Grid items>
              <TextField
                label="Prefered Language"
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
                label="Company"
                name="company"
                placeholder="company name"
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
      Congratulation ! We successfully sent your email.
      <p>I will contact you back within 48h.
      </p>
      <p>Thank you.</p>
    </ModalConfirm>
    <Layout container>
      <Layout items justify="center">
      <ModalButton onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times; Close</ModalButton>
        </Layout>
    </Layout>
  </ModalContent>

</ModalWrapper>);




  class ModalTest1 extends Component {
  render() {
    const { dispatch, modalSAtatus,data} = this.props
    const Type = "contact"
    const Modal = data
      .Modal
      .field
      .filter(modal => modal.type === Type)
      .map(modal=>modal.option)

    return (
      <Fragment>
        {
          Modal.map((data,n)=>
          <Fragment key={n}>
          <ContactForm dispatch={dispatch} modalSAtatus={modalSAtatus} data={data}/>
          </Fragment>
          )
        }

      </Fragment>
    )
  }
}



class ModalEn extends Component {

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

  return {
  Modal: state.UI.Modal, 
  modalSAtatus: state.UI.modalSAtatus,
  data: state.UI.websiteContent,
  }

}

export const ModalTest = withRouter(connect(mapStateToProps)(ModalTest1));

export default withRouter(connect(mapStateToProps)(ModalEn));
