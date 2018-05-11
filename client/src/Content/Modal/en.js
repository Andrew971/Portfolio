import React, {Component} from "react";
import {withRouter,NavLink} from 'react-router-dom'
import {connect} from 'react-redux';
import {UIAction} from '../../Modules/UI'
import {contactAction} from '../../Modules/Contact'
import ModalWrapper from '../../Components/ModalWrapper'
import ModalContent from '../../Components/ModalContent'
import ModalClose from '../../Components/ModalClose'

export const ContactEn = ({dispatch}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
      }}>&times;</ModalClose>
    <form ref={(self) => {
        this.contactForm = self
      }}>
      <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Title</h5>
            </div>
      <div className="form-row">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Name" name="username"/>
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Age" name="age"/>
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Email" name="email"/>
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Phone Number (including country and area code)" name="phone"/>
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Preferred Language (if you do not speak English)" name="language"/>
        </div>

        <div className="col-12">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Questions/Comments: Where is your dream school? What do you want to be when grow up? The more information you provide us, the better we can be prepared to help." name="comments"></textarea>
        </div>

        <div className="col-11">
          <NavLink to="/privacy-policy" onClick={(e) => {
              e.dismiss()
            }}>Privacy Policy</NavLink>
        </div>
        <div className="col-11">
          <h6>
            Or contact us by email:
            <a href="mailto:info@pandahug.ca" alt="email" target="_top" rel="noopener noreferrer" style={{
                marginLeft: '0.5rem'
              }}>
              info@pandahug.ca
            </a>
          </h6>
        </div>
      </div>
    </form>
    <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                const {
                  username,
                  age,
                  email,
                  phone,
                  language,
                  comments
                } = this.contactForm;

                  dispatch(contactAction({
                    type: 'SEND_CONTACT_INFO',
                    payload: {
                      userName: username.value,
                      age: age.value,
                      email: email.value,
                      phone: phone.value,
                      language: language.value,
                      comments: comments.value
                    }
                  }))

                }}>Save changes</button>
            </div>
  </ModalContent>

</ModalWrapper>);
export const HireEn = ({dispatch}) => (<ModalWrapper>

  <ModalContent>
    <ModalClose onClick={() => {
        dispatch(UIAction({type: "MODAL_HIDE", payload: false}))
      }}>&times;</ModalClose>
    <p>Some text in the Hire Modal..</p>
  </ModalContent>

</ModalWrapper>);

class ModalEn extends Component {

  render() {
    const {Modal, dispatch} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactEn dispatch={dispatch}/>)
      case 'Hire':
        return (<HireEn dispatch={dispatch}/>)
      default:
        return (<ContactEn dispatch={dispatch}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal}

}
export default withRouter(connect(mapStateToProps)(ModalEn));
