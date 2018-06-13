import React from "react";

import ModalWrapper from '../../../Components/Modal/ModalWrapper'
import ModalContent from '../../../Components/Modal/ModalContent'
import ModalClose from '../../../Components/Modal/ModalClose'
import ModalHeader from '../../../Components/Modal/ModalHeader'
import ModalFooter from '../../../Components/Modal/ModalFooter'
import ModalButton from '../../../Components/Modal/ModalButton'
import ModalError from '../../../Components/Modal/ModalError'
// import {sort_by} from '../../utils/constMethod'
import {TextField} from '../../../Components/inputForm'
import {Layout, Grid} from '../../../Components/Grid'

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
          <h5> I Need a website</h5>
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
                placeholder="Tell me the headlines of your project."
                id="stmt"
                autoComplete="tel-national"
                multiline/>
            </Grid>
            {modalSAtatus === false && <Grid items md lg xl span={2}>
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
                primary="primary">Send</ModalButton>
            </Layout>
          </Layout>
        </ModalFooter>
      </ModalContent>

    </ModalWrapper>
  )
};

export default ContactForm